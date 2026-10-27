import Swal from "sweetalert2"

export default function Alert({
    type = 'message',
    title = 'Info',
    text,
    icon = 'info',
    showCancelButton = false,
    confirmButtonText,
    cancelButtonText,
    showConfirmButton = true,
    buttonText = 'Okay',
    position = 'center',
    timer
}) {
    if (type === 'confirm') {
        return Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: showCancelButton,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((result) => {
            return result.isConfirmed;
        });
    }
    if (type === 'message') {
        return Swal.fire({
            position: position,
            title: title,
            text: text,
            icon: icon,
            showCancelButton: false,
            showConfirmButton: showConfirmButton,
            buttonText: buttonText,
            timer: timer
        })
    }
}

// Alert.defaultProps = {
//     type: 'message',
//     title: 'Info',
//     showCancelButton: false,
//     buttonText: 'Okay'
// }