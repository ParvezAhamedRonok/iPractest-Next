

export  function Image_crop_func() {
  // if User don't want to crop the image then will call the function below------
  // if User don't want to crop ------
//   const handleDontCrop = () => {
//     setPreview((previousImages) => previousImages.concat(Mainsrc));
//     setSelectImageForCrop(null);

//   }
//   //if user crop the Image then will call the function below......
//   const handleCropFunc = () => {
//     const canvas = document.createElement('canvas');
//     const scaleX = cropImage.target.naturalWidth / cropImage.target.width
//     const scaleY = cropImage.target.naturalHeight / cropImage.target.height
//     // console.log(scaleX);
//     // console.log(scaleY);


//     canvas.width = crop.width;
//     canvas.height = crop.height;
//     const ctx = canvas.getContext('2d');
//     ctx.drawImage(
//       cropImage.target,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width,
//       crop.height
//     )


//     canvas.toBlob((file) => {
//       let imageSelected = file;
//       let urlOfimage = URL.createObjectURL(file);
//       imageSelected['url'] = urlOfimage;
//       ImageArray.push(imageSelected);
//       // console.log(imageSelected);

//     });


//     // console.log(cropImage.target.src);
//     setTimeout(() => {
//       let newImageArray = ImageArray.filter((e) => {
//         return e.url !== cropImage.target.src
//       });
//       // console.log(newImageArray);
//       // console.log(ImageArray);
//       ImageArray = [];
//       // setPreview([null]);
//       let ThisimagesArray = newImageArray.map((file) => {
//         let imageSelected = file;
//         let urlOfimage = URL.createObjectURL(file);
//         imageSelected['url'] = urlOfimage;  //8-18-23
//         ImageArray.push(imageSelected);  //for crop--
//         // console.log(imageSelected)
//         return urlOfimage;
//       });
//       // console.log(ImageArray);
//       // console.log(newImageArray);
//       // console.log(ThisimagesArray);

//       setPreview(() => ThisimagesArray);
//       // setPreview((previousImages) => previousImages.concat(imageSelected));

//       // canvas.toBlob(blob => {
//       //   // setImage(blob)
//       //   console.log(blob);
//       //   setShowImage(blob)
//       // })
//       setSelectImageForCrop(null);
//     }, 1000);




//   }



  // function onImageLoad(e) {
  //   console.log(e);
  //   // const { naturalWidth: width, naturalHeight: height } = e.currentTarget

  //   // const crop = centerCrop(
  //   //   makeAspectCrop(
  //   //     {
  //   //       // You don't need to pass a complete crop into
  //   //       // makeAspectCrop or centerCrop.
  //   //       unit: '%',
  //   //       width: 90,
  //   //     },
  //   //     16 / 9, 
  //   //     width,
  //   //     height
  //   //   ),
  //   //   width,
  //   //   height
  //   // )
  //   // console.log(e.target.value)
  //   // setCrop(crop)
  // }

}
