import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpRequest, HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';
import { UploadClaimService } from '../Shared/Service/upload-claim.service';
import { RegisterService } from '../../registration/Shared/Service/register.service';
import { UserService } from '../../../pages/login/Shared/Service/user.service';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.page.html',
  styleUrls: ['./claim.page.scss'],
})
export class ClaimPage implements OnInit {
  errorMessage: string;
  Username: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  public isLoadingData: Boolean = false;
  @ViewChild('fileUpload') fileUploadVar: any;
  uploadResult: any;
  res: Array<string>;

  constructor(private http: HttpClient, private router: Router
    ,private user:UserService,public role:RegisterService) {
      this.errorMessage = "File Exceeds 3MB";
      this.filesToUpload = [];
      this.selectedFileNames = [];
      this.uploadResult = "File successfully upload";
  }
  fileChangeEvent(fileInput: any)
  {
      //Clear Uploaded Files result message
      this.uploadResult = "";
      this.filesToUpload = <Array<File>>fileInput.target.files;

      for (let i = 0; i < this.filesToUpload.length; i++)
      {
          this.selectedFileNames.push(this.filesToUpload[i].name);
      }
  }

  ngOnInit():void{
    this.getUserName();
  }
  Logout() {

    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  getUserName(){
    this.user.userName().subscribe((data:any) => {this,this.Username = data})
  }
  cancelUpload()
  {
      this.filesToUpload = [];
      this.fileUploadVar.nativeElement.value = "";
      this.selectedFileNames = [];
      this.uploadResult = "";
      this.errorMessage = "";
  }

  upload()
  {
      if (this.filesToUpload.length == 0)
      {
          alert('Please select at least 1 PDF files to upload!');
      }
      else if (this.filesToUpload.length > 3) {
          alert('Please select a maximum of 3 PDF files to upload!');
      }
      else
      {
          if (this.validatePDFSelectedOnly(this.selectedFileNames))
          {
              this.uploadFiles();
          }
      }
  }

  validatePDFSelectedOnly(filesSelected: string[])
  {
      for (var i = 0; i < filesSelected.length; i++)
      {
          if (filesSelected[i].slice(-3).toUpperCase() != "PDF")
          {
              alert('Please selecte PDF files only!');
              return false;
          }
          else {
              return true;
          }
      }
  }

  uploadFiles()
  {
      this.uploadResult = "";

      if (this.filesToUpload.length > 0)
      {
          this.isLoadingData = true;

          let formData: FormData = new FormData();

          for (var i = 0; i < this.filesToUpload.length; i++)
          {
              formData.append('uploadedFiles', this.filesToUpload[i], this.filesToUpload[i].name);
          }

          let apiUrl = "https://localhost:44354/api/Claim/UploadClaim";

          this.http.post(apiUrl, formData)
              .map((res: Response) => res.json())
              .subscribe
              (
                  data => {
                      this.uploadResult = data;
                      this.errorMessage = "";
                  },
                  err => {
                      console.error(err);
                      this.errorMessage = err;
                      this.isLoadingData = false;
                  },
                  () => {
                      this.isLoadingData = false,
                          this.fileUploadVar.nativeElement.value = "";
                      this.selectedFileNames = [];
                      this.filesToUpload = [];
                  }
              );
      }
  }

}

