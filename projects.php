<?php include 'includes/header.php'; ?>

<!-- Page Header -->
<section class="pt-5 mt-5 pb-4">
    <div class="container pt-5 text-center" data-aos="fade-down">
        <h1 class="display-4 fw-bold font-outfit text-gradient mb-3">My Projects</h1>
        <p class="lead text-muted">A showcase of my recent work and coding experiments.</p>
    </div>
</section>

<!-- Projects Grid -->
<section class="py-5 mb-5">
    <div class="container">
        <!-- Filter Options (Frontend visual only for demo) -->
        <div class="d-flex justify-content-center flex-wrap gap-2 mb-5" data-aos="fade-up">
            <button class="btn btn-gradient rounded-pill px-4">All</button>
            <button class="btn btn-outline-theme rounded-pill px-4">Full Stack</button>
            <button class="btn btn-outline-theme rounded-pill px-4">Frontend</button>
            <button class="btn btn-outline-theme rounded-pill px-4">PHP/MySQL</button>
        </div>

        <div class="row gy-4">
            <!-- Project 1 -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="0">
                <div class="custom-card p-0 overflow-hidden d-flex flex-column h-100">
                    <div class="position-relative overflow-hidden group">
                        <img src="assets/image/cakecraft.png" alt="CakeCraft Bakery"
                            class="img-fluid w-100 object-fit-cover" style="height: 200px; transition: transform 0.5s;">
                        <div class="position-absolute top-0 end-0 p-3">
                            <span class="badge bg-primary bg-opacity-90 rounded-pill">Full Stack</span>
                        </div>
                    </div>
                    <div class="p-4 d-flex flex-column flex-grow-1">
                        <h4 class="font-outfit fw-bold mb-2">CakeCraft E-commerce</h4>
                        <p class="text-muted mb-4 flex-grow-1">A complete bakery e-commerce platform with product
                            management, cart functionality, and secure checkout.</p>
                        <div class="d-flex flex-wrap gap-2 mb-4">
                            <span class="badge bg-body-secondary text-body border">PHP</span>
                            <span class="badge bg-body-secondary text-body border">MySQL</span>
                            <span class="badge bg-body-secondary text-body border">Bootstrap 5</span>
                        </div>
                        <div class="d-flex gap-2 mt-auto">
                            <a href="http://localhost/CakeCraft/index.php"
                                class="btn btn-sm btn-outline-theme flex-grow-1"><i class="fa-solid fa-link me-1"></i>
                                Live Demo</a>
                            <a href="#" class="btn btn-sm btn-dark flex-grow-1"><i class="fa-brands fa-github me-1"></i>
                                Code</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="custom-card p-0 overflow-hidden d-flex flex-column h-100">
                    <div class="position-relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Weather App" class="img-fluid w-100 object-fit-cover" style="height: 200px;">
                        <div class="position-absolute top-0 end-0 p-3">
                            <span class="badge bg-info bg-opacity-90 rounded-pill">Frontend</span>
                        </div>
                    </div>
                    <div class="p-4 d-flex flex-column flex-grow-1">
                        <h4 class="font-outfit fw-bold mb-2">Weather Dashboard</h4>
                        <p class="text-muted mb-4 flex-grow-1">A responsive weather application utilizing OpenWeather
                            API to display current conditions and 5-day forecasts.</p>
                        <div class="d-flex flex-wrap gap-2 mb-4">
                            <span class="badge bg-body-secondary text-body border">JavaScript</span>
                            <span class="badge bg-body-secondary text-body border">API</span>
                            <span class="badge bg-body-secondary text-body border">CSS3</span>
                        </div>
                        <div class="d-flex gap-2 mt-auto">
                            <a href="#" class="btn btn-sm btn-outline-theme flex-grow-1"><i
                                    class="fa-solid fa-link me-1"></i> Live Demo</a>
                            <a href="#" class="btn btn-sm btn-dark flex-grow-1"><i class="fa-brands fa-github me-1"></i>
                                Code</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Project 3 -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="custom-card p-0 overflow-hidden d-flex flex-column h-100">
                    <div class="position-relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Blog System" class="img-fluid w-100 object-fit-cover" style="height: 200px;">
                        <div class="position-absolute top-0 end-0 p-3">
                            <span class="badge bg-success bg-opacity-90 rounded-pill">PHP/MySQL</span>
                        </div>
                    </div>
                    <div class="p-4 d-flex flex-column flex-grow-1">
                        <h4 class="font-outfit fw-bold mb-2">Dynamic Blog CMS</h4>
                        <p class="text-muted mb-4 flex-grow-1">A custom Content Management System for writing, editing,
                            and publishing blog posts with user authentication.</p>
                        <div class="d-flex flex-wrap gap-2 mb-4">
                            <span class="badge bg-body-secondary text-body border">PHP OOP</span>
                            <span class="badge bg-body-secondary text-body border">MySQL</span>
                            <span class="badge bg-body-secondary text-body border">Tailwind</span>
                        </div>
                        <div class="d-flex gap-2 mt-auto">
                            <a href="#" class="btn btn-sm btn-outline-theme flex-grow-1"><i
                                    class="fa-solid fa-link me-1"></i> Live Demo</a>
                            <a href="#" class="btn btn-sm btn-dark flex-grow-1"><i class="fa-brands fa-github me-1"></i>
                                Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>