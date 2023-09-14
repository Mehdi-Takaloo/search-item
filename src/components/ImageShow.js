function ImageShow(image) {
    return <div>
        {/* {image.id} */}
        <img src={image.urls.small} alt={image.alt_description} />
    </div>;
}

export default ImageShow;