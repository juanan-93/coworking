
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export let ckeditor = () => {

    let ckeditors = document.querySelectorAll( '.ckeditor' );

    ckeditors.forEach( ckeditor => {

        ClassicEditor.create(ckeditor)
        .then( editor => {
            window.editor = editor;
        })
        .catch( error => {
            console.error( 'There was a problem initializing the editor.', error );
        } );

    } );

   

}
