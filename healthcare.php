<?php include("./protector/password_protect.php"); ?>

<!doctype html>
<html lang="en">

<head>

  <link rel="stylesheet" media="screen" href="css/style.css" />
  <link rel="stylesheet" media="screen" href="css/healthcare-style.css" />

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Thomas Ruitenberg">
  <meta name="theme-color" content="rgba(166, 161, 255, 1)">
  <meta name="robots" content="noindex,nofollow">


  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <link rel="stylesheet" href="css/style.css?v=1.0">
  <script src="https://kit.fontawesome.com/60dc161d94.js" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
  <script defer src="/script.js"></script>


  <title>Thomas' Portfolio: Healthcare</title>

  <link rel="apple-touch-icon" sizes="180x180" href="./img/favicons/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png">
  <link rel="manifest" href="img/favicons/site.webmanifest">
  <link rel="mask-icon" href="img/favicons/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">

</head>

<body id="healthcare-bg">
  <button class="scrollToTopBtn"><i class="fas fa-arrow-up"></i></button>

  <nav class="navbar sticky-top navbar-expand-sm navbar-light py-3" id="white">
    <div class="container">
      <a class="navbar-brand" id="name-heading" href="index.html">Thomas Ruitenberg</a>
      <span class="d-none d-sm-block me-auto invert" id="role-heading">─ Product Designer</span>
    </div>
  </nav>

  <div class="heading-bg" id="target">
    <div class="heading-content">
      <div class="heading-text">
        <div class="heading-title container align-items-start">
          <div class="row">
            <h2 id="header" style="color: #fff;">Rabobank ─ 2019</h2>
          </div>
          <div class="row col-md-10 col-lg-8">
            <h1 id="header"><b style="font-weight: 900;">Doctor in your pocket</b> has been developed to increase
              self-reliance for health questions via an app</h1>
          </div>
          <div class="row col-md-6 col-lg-6 mt-5">
            <div class="col-sm-auto">
              <p style="font-style: italic; margin-bottom: 0rem;">Lean Startup</p>
            </div>
            <div class="col-sm-auto d-none d-sm-block">
              <p style="font-style: italic; margin-bottom: 0rem;"> ─ </p>
            </div>
            <div class="col-sm-auto">
              <p style="font-style: italic; margin-bottom: 0rem;">Market Validation</p>
            </div>
            <div class="col-sm-auto d-none d-sm-block">
              <p style="font-style: italic; margin-bottom: 0rem;"> ─ </p>
            </div>
            <div class="col-sm-auto">
              <p style="font-style: italic; margin-bottom: 0rem;">Design Thinking</p>
            </div>
          </div>
        </div>


      </div>

      <div class="hero d-none d-md-block">

        <video class="hero-image d-block window-style" loading="eager" autoplay loop playsinline muted>
          <source src="img/healthcare/hero-showcase.webm">
        </video>
      </div>
    </div>


    <div class="heading-bottom d-flex align-items-center">
      <div class="container">
        <div id="section04" class="demo">
          <a class="scroll" href="#case"><span></span>Full case study</a>
        </div>

      </div>
    </div>
  </div>

  <section id="case" class="py-5">
    <div class="container" id="smaller-container">
      <div class="mt-5 text-xl-start">
        <h2>Role</h2>
        <p>
          I was responsible for identifying the market demand by desk research, conducting interviews, (online) surveys
          and creating persona’s. Designing and validating MVPs via prototyping, concept visualisations and marketing
          material.
        </p>
      </div>
    </div>

    <div class="container my-5" id="smaller-container">
      <div class="my-5 text-xl-start">
        <h2>Problem to solve</h2>
        <p>
          Seeking quick and reliable answers to your health related questions can be challenging. Online gives
          insufficient confirmation and having no time to meet with your GP (general practitioner) leaves your important
          concerns unanswered. It is very difficult for general practices to innovate and Rabobank wants to contribute
          to
          increase self-reliance regarding to health.
        </p>
      </div>
    </div>

    <div class="container my-5 d-flex flex-column justify-content-center align-items-center" data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      <img src="img/healthcare/proces-visualised-thumbnail.webp" alt="proces visualised" class="img-fluid"
        id="clickable" data-bs-target="#carouselExampleControls" data-bs-slide-to="0">
    </div>


    <div class="container my-5" id="smaller-container">
      <div class="text-xl-start">
        <h2>Process: Lean Startup</h2>
        <p>
          In this "Problem Fit phase", I conducted multiple interviews and survey’s to map frictions on both, the
          civilians and the GP’s side. Our aim was to (in)validate the created assumptions, resulting in a wide range of
          learnings. With multiple brainstorm sessions, guided by the healthcare experts and me, we iterated on our
          learnings resulting in new ideas and assumptions. For which I created experiments such as Five Second Tests,
          ad
          campaigns and surveys, to collect feedback and improve our concept.
        </p>
      </div>

    </div>






    <div class="container" id="smaller-container">
      <div class="my-5 text-xl-start">
        <h2>Validation concept with low-fi prototype </h2>
        <p>
          To validate our concept I made a low-fidelity clickable prototype with Sketch & InVision. I found it quite a
          challenge to create a test method to validate our solutio, since this user journey is complex and long. So I
          decided to follow a health related narrative and simulated the process. This stripped down prototype gave us
          trustworthy results and a good understanding of our users.
      </div>
    </div>

    <div class="container my-5 d-flex flex-column justify-content-center align-items-center" data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      <img src="img/healthcare/low-fidelity-proto-thumbnail.webp" alt="low fidelity prototype" class="img-fluid"
        id="clickable" data-bs-target="#carouselExampleControls" data-bs-slide-to="1">
    </div>

    <div class="container" id="smaller-container">
      <div class="my-5 text-xl-start">
        <h2>Five Second Test & ad campaign to define proposition</h2>
        <p>
          Together with a team member, we used Five Second Test to fine-tune our proposition. Next I created a ‘fake’
          landing page via Instapage. Our first test was to identify a demand and our second test was to generate new
          leads for future testing, since it was quite hard to find the right respondents.<br><br>

          During this period I’ve learned a lot about marketing, writing content and how to convert visitors into leads.
          I
          used Instapage to quickly create a website, combined with ActiveCampaign for automated emails and Google +
          Facebook Ads for advertisement.

        </p>
      </div>
    </div>

    <div class="container my-5 d-flex flex-column justify-content-center align-items-center" data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      <div class="row">
        <div class="col-sm mb-6">
          <img src="img/healthcare/results-airtable-thumbnail.webp" alt="results airtable" class="img-fluid"
            id="clickable" data-bs-target="#carouselExampleControls" data-bs-slide-to="2">
        </div>

        <div class="col-sm mb-6">
          <img src="img/healthcare/landingpage-thumbnail.webp" alt="website instapage" class="img-fluid" id="clickable"
            data-bs-target="#carouselExampleControls" data-bs-slide-to="3">
        </div>
      </div>
    </div>

    <div class="container" id="smaller-container">
      <div class="my-5 text-xl-start">
        <p>
          All this resulted in well validated proposition which showed that there is definitely a need from both
          stakeholders. These results did not surprise me at that time. Because of the way primary care is structured,
          it
          will hold back innovative solutions and only fragment this sector even more. You’ll see new disruptive
          technologies appearing outside the Netherlands (Babylon, KRY, Ada) with success. <br><br>

          Below I’ve created a flowchart of our final MVP and mockups to get an impression of our concept. Sadly because
          of COVID-19 and the huge impact it has had on the healthcare system, this project was discontinued by
          Rabobank.

        </p>
      </div>
    </div>

    <div class="container my-5 d-flex flex-column justify-content-center align-items-center" data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      <img src="img/healthcare/mvp-flow-thumbnail.webp" alt="mvp flow" class="img-fluid" id="clickable"
        data-bs-target="#carouselExampleControls" data-bs-slide-to="4">
    </div>

    <div class="container" id="smaller-container">
      <div class="my-5 text-xl-start">
        <h2>Creating the visual style</h2>
        <p>
          Together with some help from a visual designer, some competitor research was done for inspiration and
          collected
          in a moodboard. Because of our extensive research and validation, we knew what the core values of this concept
          should be: quick, trustworthy and secure. Keeping this in mind we came up with the following colors and font,
          which is enough for now.
        </p>
      </div>
    </div>

    <div class="container my-5 d-flex flex-column justify-content-center align-items-center mb-5" data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      <div class="row">
        <div class="col-sm mb-6">
          <img src="img/healthcare/styleguide-1-thumb.webp" alt="Colors styleguide" class="img-fluid" id="clickable"
            data-bs-target="#carouselExampleControls" data-bs-slide-to="5">
        </div>

        <div class="col-sm mb-6">
          <img src="img/healthcare/styleguide-2-thumb.webp" alt="Font styleguide" class="img-fluid" id="clickable"
            data-bs-target="#carouselExampleControls" data-bs-slide-to="6">
        </div>
      </div>
    </div>

    <div class="container my-5 col-md-10 col-xxl-8 py-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5 d-flex">
        <div class="col-10 col-lg-7 mx-auto">
          <img src="/img/healthcare/mockup_1-thumb.png" alt="designs of app" class="img-fluid" id="clickable"
            data-bs-target="#carouselExampleControls" data-bs-slide-to="7">
        </div>
        <div class="col-lg-4 offset-lg-1">
          <p>
            I tried to re-create the feeling of a GP’s waiting room, giving the user comfort and ease. Clear icons and
            subtitles support the consult options and there are little to none distractions.
          </p>
        </div>
      </div>
      <div class="row align-items-center g-5 py-5">
        <div class="col-10 col-lg-7 mx-auto">
          <img src="/img/healthcare/mockup_2-thumb.png" alt="designs of app" class="img-fluid" id="clickable"
            data-bs-target="#carouselExampleControls" data-bs-slide-to="8">
        </div>
        <div class="col-lg-4">
          <p>
            A sans serif font has been chosen because it doesn’t tire your eyes as quickly and a lot of reading has to
            be done. With adjustments to the line height and kerning this font becomes even more easier to read.
          </p>
        </div>
      </div>
    </div>


    <div class="container my-5" id="smaller-container">
      <h2 class="mb-3">My biggest learnings</h2>

      <div class="card mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-shrink-0"><i class="fas fa-quote-left fs-2" style="color:rgba(0, 0, 0, 0.125);"></i></div>
            <div class="ms-4">
              <h2 class="card-title" style="font-size:1.5em;">Don’t try to work out all the details</h2>
              <p class="card-text">When validating high-over concepts, don’t work out the details. Keep it high-over.
                Otherwise you’ll collect feedback about the details instead of the concept as a whole.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-shrink-0"><i class="fas fa-quote-left fs-2" style="color:rgba(0, 0, 0, 0.125);"></i></div>
            <div class="ms-4">
              <h2 class="card-title" style="font-size:1.5em;">Conversion rates are additional data</h2>
              <p class="card-text">Conversion rates of the landing page should be seen as something additional on a good
                foundation of research. It’s ‘one dimensional’ quantitative data. It doesn’t give much insights,
                especially when using marketing tactics to get higher conversion rates.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-body p-4">
          <div class="d-flex">
            <div class="flex-shrink-0"><i class="fas fa-quote-left fs-2" style="color:rgba(0, 0, 0, 0.125);"></i></div>
            <div class="ms-4">
              <h2 class="card-title" style="font-size:1.5em;">Openness and transparency gives you the most</h2>
              <p class="card-text">When gathering new leads for prototype testing, be open and transparent. To get the
                highest conversion rate, we kind of stated that our concept already existed. This backfired because when
                the leads found out this wasn’t real, they all lost their interest. I find it better to achieve higher
                engagement with less users instead of the other way around. </p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="container mt-5 d-flex flex-column justify-content-center align-items-center" data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      <img src="img/healthcare/mockups-thumbnail.png" alt="mockups" class="img-fluid" id="clickable"
        data-bs-target="#carouselExampleControls" data-bs-slide-to="9">
    </div>




    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="d-flex flex-row-reverse p-3">
            <button type="button" class="btn-close btn-close-white float-end" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">


            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false"
              data-bs-keyboard="true">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="img/healthcare/proces-visualised.webp" class="d-block w-100" alt="bla">
                </div>
                <div class="carousel-item">
                  <img src="img/healthcare/low-fidelity-proto.webp" class="d-block w-100" alt="blabla">
                </div>
                <div class="carousel-item">
                  <img src="img/healthcare/results-airtable.webp" class="d-block w-100" alt="blabla2">
                </div>
                <div class="carousel-item">
                  <img src="img/healthcare/landingpage.webp" class="d-block w-100" alt="blabla3">
                </div>
                <div class="carousel-item">
                  <img src="img/healthcare/mvp-flow.jpg" class="d-block w-100" alt="blabla4">
                </div>
                <div class="carousel-item">
                  <img src="img/healthcare/styleguide-1.webp" class="d-block w-100" alt="styleguide colors">
                </div>
                <div class="carousel-item">
                  <img src="img/healthcare/styleguide-2.webp" class="d-block w-100" alt="styleguide font">
                </div>
                <div class="carousel-item">
                  <img src="img/healthcare/mockup_1.png" class="d-block w-100" alt="mockup of design">
                </div>
                <div class="carousel-item">
                  <img src="img/healthcare/mockup_2.png" class="d-block w-100" alt="mockup of design">
                </div>



                <div class="carousel-item">
                  <img src="img/healthcare/mockups.png" class="d-block w-100" alt="blabla5">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>


          </div>

        </div>

      </div>
    </div>
  </section>

  <section>
    <div class="container">
        <footer class="row d-flex flex-wrap justify-content-between align-items-center py-3 my-4">

            <div class="col-md-6 col-xs-12 d-flex align-items-start align-items-xs-center">
                <span style="color: #cdcfcf;" class="mb-3 mb-md-0 text-muted">Website designed and developed by me. ©</span>
                <span style="color: #cdcfcf;" class="mb-3 mb-md-0 text-muted" id="currentYear"></span>
            </div>

            <ul class="nav col-md-6 justify-content-xxl-end justify-content-sm-center list-unstyled d-flex">
                <li class="ms-3"><a class="p" href="https://www.linkedin.com/in/thomasruitenberg/"
                        target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                        <use xlink:href="https://www.linkedin.com/in/thomasruitenberg/"></use></svg>
                    </a></li>
                <li class="ms-3"><a class="p" href="https://dribbble.com/ruitenberg" target="_blank"
                        rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z" />
                            <use xlink:href="https://dribbble.com/ruitenberg"></use>
                        </svg>
                    </a></li>
                <li class="ms-3"><a class="p" href="https://read.cv/ruitenberg" target="_blank"
                        rel="noopener noreferrer"> <svg width="23.25" height="25" viewBox="0 0 126 136"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M44.0354 1.1514L112.407 19.4715C121.847 22.001 127.449 31.7043 124.92 41.1444L103.165 122.336C100.635 131.776 90.9319 137.378 81.4919 134.849L13.1202 116.528C3.68007 113.999 -1.92213 104.296 0.607373 94.855L22.3625 13.6643C24.892 4.2242 34.5953 -1.378 44.0354 1.1514ZM41.7454 9.6979C37.0253 8.4331 32.1737 11.2342 30.9089 15.9543L9.15378 97.146C7.88908 101.866 10.6902 106.717 15.4103 107.982L83.7819 126.302C88.5019 127.567 93.3539 124.766 94.6179 120.046L116.373 38.8544C117.638 34.1344 114.837 29.2827 110.117 28.018L41.7454 9.6979Z" />
                            <path
                                d="M40.2963 32.2092C40.9287 29.8492 43.3546 28.4486 45.7147 29.081L96.9934 42.8211C99.3534 43.4534 100.754 45.8793 100.121 48.2394C99.4893 50.5994 97.0633 51.9999 94.7034 51.3675L43.4246 37.6274C41.0645 36.9951 39.664 34.5692 40.2963 32.2092Z" />
                            <path
                                d="M34.5698 53.5753C35.2022 51.2153 37.628 49.8147 39.988 50.4471L91.2668 64.1872C93.6268 64.8195 95.0268 67.2454 94.3948 69.6054C93.7628 71.9654 91.3368 73.366 88.9768 72.7336L37.698 58.9935C35.338 58.3612 33.9374 55.9353 34.5698 53.5753Z" />
                            <path
                                d="M28.8472 74.9414C29.4795 72.5814 31.9054 71.1808 34.2654 71.8132L64.178 79.828C66.538 80.461 67.9385 82.886 67.3062 85.246C66.6738 87.607 64.248 89.007 61.8879 88.375L31.9754 80.36C29.6154 79.727 28.2148 77.3014 28.8472 74.9414Z" />
                        </svg>
                        <use xlink:href="https://read.cv/ruitenberg"></use>
                    </a></li>
            </ul>
        </footer>
    </div>
</section>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
    crossorigin="anonymous"></script>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
  <script type="text/JavaScript" src="date_script.js"></script>
</body>

</html>