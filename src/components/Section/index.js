import React from "react";
import Content from "../Content";

const classNames = (theme, leftImage, full) => {
  const themeClass = theme ? `section--${theme}` : "";
  const imageAlign = leftImage ? `section--leftImage` : "section--rightImage";
  const fullClass = full ? `section--full` : "";
  return `section ${themeClass} ${imageAlign} ${fullClass}`;
};

const Section = ({
  children,
  theme,
  video,
  image,
  image2,
  image3,
  leftImage,
  title,
  subtitle,
  addition,
  imagetitle,
  full
}) => (
  <section className={classNames(theme, leftImage, full)}>
    <div className="wrapper section_wrapper">
      {image ? (
        <div className="section_image">
          {imagetitle && (
            <h1 className="section_title text-center">{imagetitle}</h1>
          )}
          <img src={image} className="section_image" />
          {image2 && <img src={image2} className="section_image" />}
          {image3 && <img src={image3} className="section_image" />}
        </div>
      ) : null}

      {video ? (
        <div className="section_image section_video">
          <div className="embed-response">
            <video autoPlay loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}

      <div className="section_content">
        <h1 className="section_title">{title}</h1>
        <h2 className="section_subtitle">{subtitle}</h2>

        {addition && addition()}

        {children && <Content>{children}</Content>}
      </div>
    </div>
  </section>
);

export default Section;
