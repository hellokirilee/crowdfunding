import React from "react";

function AboutPage() {
  return (
    <div id="about-page">
      <h2 class="page-heading">About OnlyCats</h2>
      <ul>
        <li>Created by: Kiri Mews</li>
        <li>Built with: Django Rest Framework & React</li>
        <li>
          <a href="https://github.com/hellokirilee">Github</a>
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
