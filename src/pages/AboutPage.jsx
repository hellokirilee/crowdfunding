import React from "react";

function AboutPage() {
  return (
    <div id="about-page">
      <h2 class="page-heading">About OnlyCats</h2>
      <h3>Created by: Kiri Mews</h3>
      <h4>Using Django Rest Framework & React</h4>
      <p>
        OnlyCats is your premium space on the internet for cat content. Whether
        you are smitten for kittens, love cats 'chonky', go crazy for 'long
        boys', or have niche interest like 'toe beans' OnlyCats is for you.
        OnlyCats allows you to fund the 'Catent Creator' directly, by
        Purrscribing to them. Your Purrscription will allow you to get access to
        exclusive content that they post. Your Purrscription can be kept
        private, or you can send your favourite cats a supportive message when
        sending funds. Purrscribers receive lifetime access to any content
        published in that period. The initial plan for this project is
        documented in{" "}
        <a href="https://www.notion.so/itskiri/Project-4-cc8ee0b3e8f64337b216295f47f139f7">
          Notion
        </a>
      </p>
      <ul>
        <li>
          <a href="https://github.com/hellokirilee">Creator's Portfolio</a>
        </li>
        <li>
          <a href="https://github.com/hellokirilee/crowdfunding">
            Front End App Repository
          </a>
        </li>
        <li>
          <a href="https://github.com/hellokirilee/onlycats">API Repository</a>
        </li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li>
          Icons made by{" "}
          <a href="http://www.freepik.com/" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;
