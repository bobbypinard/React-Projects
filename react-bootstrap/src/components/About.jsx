import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/taylor-ultrawide.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/taylor1.jpg" className="about-profile-pic" rounded />
            <h3>Taylor Swift</h3>
            <p>Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. One of the leading contemporary recording artists, she is known for narrative songs about her personal life, which have received widespread media coverage.</p>

            <p>Born and raised in Pennsylvania, Swift moved to Nashville, Tennessee at the age of 14 to pursue a career in country music. She signed with the label Big Machine Records and became the youngest artist ever signed by the Sony/ATV Music publishing house. Her 2006 self-titled debut album peaked at number five on the Billboard 200 and spent the most weeks on the chart in the 2000s. The album's third single, "Our Song", made her the youngest person to single-handedly write and perform a number-one song on the Hot Country Songs chart. Swift's second album, Fearless, was released in 2008. Buoyed by the success of pop crossover singles "Love Story" and "You Belong with Me", Fearless became the best-selling album of 2009 in the United States. The album won four Grammy Awards, with Swift becoming the youngest Album of the Year winner.</p>

            <p>Swift was the sole writer of her 2010 album, Speak Now. It debuted at number one in the United States and the single "Mean" won two Grammy Awards. Her fourth album, Red (2012), yielded the successful singles "We Are Never Ever Getting Back Together" and "I Knew You Were Trouble". With her fifth album, the pop-focused 1989 (2014), she became the first act to have three albums sell 1 million copies within one week in the United States. Its singles "Shake It Off", "Blank Space", and "Bad Blood" reached number one in the US, Australia, and Canada. The album received three Grammy Awards, and Swift became the first woman and fifth act overall to win Album of the Year twice. The 2015 concert tour for 1989 became one of the highest-grossing of the decade. Swift's sixth album, Reputation (2017) and its lead single "Look What You Made Me Do" topped the U.K. and U.S. charts.</p>

            <p>As a songwriter, Swift has received awards from the Nashville Songwriters Association and the Songwriters Hall of Fame, and was included in Rolling Stone's 100 Greatest Songwriters of All Time in 2015. She is also the recipient of 10 Grammy Awards, five Guinness World Records, one Emmy, 21 Billboard Music Awards, and 12 Country Music Association Awards. Swift is one of the best-selling music artists of all time, having sold more than 40 million albums—including 27.8 million in the US—and 130 million single downloads. She has appeared in Time's 100 most influential people in the world (2010 and 2015), Forbes' top-earning women in music (2011–2015), Forbes' 100 most powerful women (2015), and Forbes Celebrity 100 (2016). Her inclusion in the third of these made her the youngest woman on the list, and she ranked first in Celebrity 100.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
