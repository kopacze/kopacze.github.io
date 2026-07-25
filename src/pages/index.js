import React from "react"

import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import firstImage from "../assets/kopacze-4.webp"
import secondImage from "../assets/kopacze-3.webp"
import thirdImage from "../assets/kopacze-6.webp"
import StyledContainer from "../components/styledContainer"
import StyledBackgroundImage from "../components/styledBackgroundImage"
import StyledSection from "../components/styledSection"
import DownArrow from "../components/downArrow"

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t("home.seoTitle")} />
      <StyledSection>
        <StyledBackgroundImage background={firstImage}></StyledBackgroundImage>
        <StyledContainer>
          <h1>{t("home.title")}</h1>
          {t("home.content")
            .split("\n")
            .map((item, key) => {
              return <p key={key}>{item}</p>
            })}

          <DownArrow nextSectionNr={1}></DownArrow>
        </StyledContainer>
      </StyledSection>
      <StyledSection>
        <StyledBackgroundImage background={secondImage}></StyledBackgroundImage>
        <StyledContainer>
          <h1>{t("home.space")}</h1>
          {t("home.aboutSpace")
            .split("\n")
            .map((item, key) => {
              return <p key={key}>{item}</p>
            })}
        </StyledContainer>
      </StyledSection>
    </>
  )
}

export default IndexPage
