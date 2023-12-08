import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class SwalService{

    callSwal(confirmButtonName: string, title: string, text: string, callBack: () => void, status: number = 0){
        
        Swal.fire({
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: "Vazgeç",
            confirmButtonText: confirmButtonName,
            text: text,
            title: title,
            icon: status === 1 ? 'error' : 'question'
        }).then(res => {
            if(res.isConfirmed){
                callBack();
            }
        })
    }
}