import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import imgIndex from "../images/bg/header-home.jpg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Golden Eagle Chinese Restaurant is located on King Street in Honolulu. We are open daily serving your favorite Chinese Cuisine.`,
      author: `@restaurantmarketinghawaii"
      keywords={[
        `Chinese Restaurant`,
        `Hawaii Restaurant`,
        `Hawaii Chinese Food`,
        `Chinese Takeout`,
      ]}
    />
    <HeaderIndex img={imgIndex}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner
          titleSmall="Restaurant Marketing Hawaii"
          subtitle="Running a restaurant is your passion, marketing your restaurant is ours. Better branding. Better results."
        >
          <AniLink fade to="/sign-up">
            <Button>SIGN UP</Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section>
      <ContactForm />
    </Section>
  </Layout>
)

export default IndexPage
