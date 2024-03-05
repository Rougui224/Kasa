export function Picture({ imgeUrl, altText, children }) {
  return (
    <div className="picture">
      <img src={imgeUrl} alt={altText} className="picture_img" />
      {children}
    </div>
  );
}
