import React from "react"

import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import StyledContainer from "../components/styledContainer"
import StyledBackgroundImage from "../components/styledBackgroundImage"
import StyledGallery from "../components/styledGallery"
import firstImage from "../assets/kopacze-6.webp"
import StyledSection from "../components/styledSection"
import DownArrow from "../components/downArrow"

function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg|webp)$/)
)

const GalleryPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t("gallery.seoTitle")} />
      <StyledSection>
        <StyledBackgroundImage background={firstImage}></StyledBackgroundImage>
        <StyledContainer>
          <h1>{t("gallery.title")}</h1>
          <DownArrow nextSectionNr={1}></DownArrow>
        </StyledContainer>
      </StyledSection>
      <StyledSection>
        <StyledGallery>
          {images
            .filter(img => !img.includes("kopacze-1"))
            .map((img, i) => (
              <img src={img} alt={"image " + i} key={img}></img>
            ))}
        </StyledGallery>
      </StyledSection>
    </>
  )
}
export default GalleryPage
