//not used yet...



//show images into UI & convert them into a blob url for passing those in Upload-Image-GCP
//for converting images into text...
export function Show_Image_Into_UI(event, ImageArray, setPreview,) {
    // setFile(event.target.files[0]);

    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    // console.log(selectedFilesArray);
    const imagesArray = selectedFilesArray.map((file) => {
        let imageSelected = file;
        // console.log(file);
        let urlOfimage = URL.createObjectURL(file);
        // console.log(urlOfimage);
        imageSelected['url'] = urlOfimage;  //8-18-23
        ImageArray.push(imageSelected);  //for crop--
        return urlOfimage;
    });
    //
    setPreview((previousImages) => previousImages.concat(imagesArray));
    // FOR BUG IN CHROME
    event.target.value = "";
}


//delete images which one want with allo delete the blob url from images array
export function Delete_Image_Into_UI(image, setPreview, imagePreview, ImageArray) {
    setPreview(imagePreview.filter((e) => e !== image));
    URL.revokeObjectURL(image);
    // console.log(image)
    var filteredImage = ImageArray.filter(function (imageofArray) { return imageofArray.url != image; });

    ImageArray = filteredImage;
}