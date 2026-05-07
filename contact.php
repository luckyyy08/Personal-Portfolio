<?php
include 'includes/header.php';

// Form Submission handling for display purposes
$success_msg = "";
$error_msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit_contact'])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Basic validation
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {

        // Option 1: Use PHP mail() - Requires server config
        // $to = "your-email@example.com";
        // $headers = "From: " . $email;
        // mail($to, $subject, $message, $headers);

        $success_msg = "Thank you, $name! Your message has been sent successfully. I will get back to you soon.";
    } else {
        $error_msg = "Please fill in all required fields with a valid email.";
    }
}
?>

<!-- Page Header -->
<section class="pt-5 mt-5 pb-4">
    <div class="container pt-5 text-center" data-aos="fade-down">
        <h1 class="display-4 fw-bold font-outfit text-gradient mb-3">Get In Touch</h1>
        <p class="lead text-muted">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
    </div>
</section>

<!-- Contact Section -->
<section class="py-5 mb-5">
    <div class="container">
        <div class="row gy-5">
            <!-- Contact Info -->
            <div class="col-lg-5" data-aos="fade-right">
                <div class="custom-card h-100">
                    <h3 class="font-outfit fw-bold mb-4">Contact Information</h3>
                    <p class="text-muted mb-5">Fill out the form and I will get back to you within 24 hours.</p>

                    <div class="d-flex align-items-center mb-4">
                        <div class="icon-box d-flex align-items-center justify-content-center flex-shrink-0"
                            style="width: 50px; height: 50px; border-radius: 50%; background: rgba(99, 102, 241, 0.1); color: var(--primary-color); font-size: 1.2rem;">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div class="ms-3">
                            <h5 class="fw-bold mb-1">Phone / WhatsApp</h5>
                            <a href="tel:+919579329098" class="text-muted text-decoration-none">+91 9579329098</a>
                        </div>
                    </div>

                    <div class="d-flex align-items-center mb-4">
                        <div class="icon-box d-flex align-items-center justify-content-center flex-shrink-0"
                            style="width: 50px; height: 50px; border-radius: 50%; background: rgba(236, 72, 153, 0.1); color: var(--accent-color); font-size: 1.2rem;">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="ms-3">
                            <h5 class="fw-bold mb-1">Email</h5>
                            <a href="mailto:lokeshahire85@gmail.com"
                                class="text-muted text-decoration-none">lokeshahire85@gmail.com</a>
                        </div>
                    </div>

                    <div class="d-flex align-items-center mb-5">
                        <div class="icon-box d-flex align-items-center justify-content-center flex-shrink-0"
                            style="width: 50px; height: 50px; border-radius: 50%; background: rgba(139, 92, 246, 0.1); color: var(--secondary-color); font-size: 1.2rem;">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="ms-3">
                            <h5 class="fw-bold mb-1">Location</h5>
                            <span class="text-muted">Nashik, Maharashtra, India</span>
                        </div>
                    </div>

                    <h5 class="fw-bold mb-3">Follow Me</h5>
                    <div class="d-flex gap-3">
                        <a href="https://github.com/luckyyy08" target="_blank" class="social-icon"
                            aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/lokesh-ahire" target="_blank" class="social-icon"
                            aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/_luckyyy.08/" target="_blank" class="social-icon"
                            aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="col-lg-7" data-aos="fade-left">
                <div class="custom-card">
                    <h3 class="font-outfit fw-bold mb-4">Send a Message</h3>

                    <?php if (!empty($success_msg)): ?>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <i class="fa-solid fa-circle-check me-2"></i> <?php echo $success_msg; ?>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    <?php endif; ?>

                    <?php if (!empty($error_msg)): ?>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <i class="fa-solid fa-circle-exclamation me-2"></i> <?php echo $error_msg; ?>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    <?php endif; ?>

                    <!-- Form using FormSubmit.co for easy deployment without PHP mail config -->
                    <!-- To use PHP processing, change action to "" and remove FormSubmit fields -->
                    <form action="https://formsubmit.co/lokeshahire85@gmail.com" method="POST" class="needs-validation">
                        <!-- FormSubmit config -->
                        <input type="hidden" name="_subject" value="New submission from Portfolio!">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_next"
                            value="http://<?php echo $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF']; ?>">

                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="name" class="form-label fw-medium">Your Name <span
                                        class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="name" name="name" required
                                    placeholder="Name">
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label fw-medium">Your Email <span
                                        class="text-danger">*</span></label>
                                <input type="email" class="form-control" id="email" name="email" required
                                    placeholder="name@example.com">
                            </div>
                            <div class="col-12">
                                <label for="subject" class="form-label fw-medium">Subject</label>
                                <input type="text" class="form-control" id="subject" name="subject"
                                    placeholder="Freelance Project Inquiry">
                            </div>
                            <div class="col-12">
                                <label for="message" class="form-label fw-medium">Message <span
                                        class="text-danger">*</span></label>
                                <textarea class="form-control" id="message" name="message" rows="5" required
                                    placeholder="Hello, I would like to discuss..."></textarea>
                            </div>
                            <div class="col-12 mt-4">
                                <button type="submit" name="submit_contact"
                                    class="btn btn-gradient px-5 py-3 rounded-pill w-100 fw-bold">
                                    Send Message <i class="fa-solid fa-paper-plane ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>