import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import Intro from "../components/Intro"
import imgIndex from "../images/bg/golden-eagle-restaurant.jpg"

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
          titleSmall="Golden Eagle Chinese Restaurant"
          subtitle="Golden Eagle Chinese Restaurant is located on King Street in Honolulu. We are open daily serving your favorite Chinese Cuisine."
        >
          <AniLink fade to="#menu">
            <Button>ORDER TAKEOUT</Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section id="menu" style={{ marginTop: "2rem" }}>
      <Intro heading="our menu" />
    </Section>
    <Section id="information" style={{ marginTop: "2rem" }}>
      <Intro heading="how can we help you?" />
      <ContactForm />
    </Section>
  </Layout>
)

export default IndexPage
