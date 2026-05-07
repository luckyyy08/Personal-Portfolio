<?php
// Helper function to get the current page for active menu state
$current_page = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio | Web Developer</title>
    <meta name="description"
        content="Professional portfolio of a Full Stack Web Developer. Showcasing projects, skills, and experience.">
    <meta name="keywords" content="Web Developer, Portfolio, Full Stack, Frontend, Backend, PHP, JavaScript">

    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <!-- AOS Animation CSS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;800&display=swap"
        rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body class="bg-body text-body">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top glassmorphism">
        <div class="container">
            <a class="navbar-brand fw-bold font-outfit text-gradient" href="index.php">
                <i class="fa-solid fa-code me-2"></i>DevPortfolio
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item">
                        <a class="nav-link <?= ($current_page == 'index.php') ? 'active' : ''; ?>"
                            href="index.php">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= ($current_page == 'about.php') ? 'active' : ''; ?>"
                            href="about.php">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= ($current_page == 'projects.php') ? 'active' : ''; ?>"
                            href="projects.php">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?= ($current_page == 'contact.php') ? 'active' : ''; ?>"
                            href="contact.php">Contact</a>
                    </li>
                    <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                        <button class="btn btn-outline-theme rounded-circle" id="themeToggle" aria-label="Toggle Theme">
                            <i class="fa-solid fa-sun"></i>
                        </button>
                    </li>
                    <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                        <a href="resume.pdf" target="_blank" class="btn btn-gradient px-4 rounded-pill">Resume <i
                                class="fa-solid fa-download ms-2"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>