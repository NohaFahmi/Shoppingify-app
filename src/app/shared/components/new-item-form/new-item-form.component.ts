import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IListItem} from "../../interfaces/list-items.interface";
import {ICategory} from "../../interfaces/categories.interface";
import {FilesUploadService} from "../../services/files-upload/files-upload.service";
import {Subject, takeUntil} from "rxjs";
import {FileUpload} from "primeng/fileupload";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.scss']
})
export class NewItemFormComponent implements OnInit, OnDestroy {
  @Input() isEditMode: boolean = false;
  @Input() categories: ICategory[] | [] | null = [];
  @Input() item: IListItem | null = null;
  itemForm: FormGroup;
  imageURL: string = "";
  @ViewChild('fileUpload', {static: false}) fileUpload: any;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private filesUploadService: FilesUploadService, private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageURL: new FormControl({value: '', disabled: true})
    })
  }

  ngOnInit(): void {
    if (this.item && this.isEditMode) {
      this.itemForm.patchValue({
        name: this.item.name,
        category: this.item.categoryId,
        description: this.item.description,
        imageURL: this.item.imageURL
      })
    }
  }

  onUpload(files: any, fileUpload: FileUpload) {
    console.log(files.files[0]);
    this.filesUploadService.uploadFile(files.files[0]).fileRef.getDownloadURL().pipe(takeUntil(this.destroy$)).subscribe((url) => {
      this.imageURL = url;
      this.fileUpload.clear();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    let item: IListItem = {
      name: this.itemForm.value.name,
      categoryId: this.itemForm.value.category,
      description: this.itemForm.value.description,
      imageURL: this.imageURL
    }
    console.log(item);
  }
}
