<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Webpage with Animations</title>
  <style>
    /* Basic Styles */
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
    }

    h1 {
      color: #333;
    }

    /* Animated Element */
    .animated-box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      margin: 20px auto;
      border-radius: 10px;
      position: relative;
      animation: none; /* No animation initially */
    }

    /* CSS Animation */
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(200px);
      }
      100% {
        transform: translateX(0);
      }
    }

    /* Feedback Section */
    #feedback {
      margin: 20px;
    }

    input {
      padding: 10px;
      margin: 10px;
      width: 300px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }

    .success {
      color: green;
    }
  </style>
</head>
<body>
  <h1>Dynamic Webpage</h1>

  <!-- Animated Box -->
  <div class="animated-box" id="animatedBox"></div>
  <button onclick="startAnimation()">Start Animation</button>

  <!-- LocalStorage Demo -->
  <div id="feedback">
    <h2>Feedback Form</h2>
    <input type="text" id="feedbackInput" placeholder="Enter your feedback">
    <button onclick="saveFeedback()">Save Feedback</button>
    <p id="message" class="success"></p>
  </div>

  <script>
    // JavaScript Function to Trigger CSS Animation
    function startAnimation() {
      const box = document.getElementById('animatedBox');
      box.style.animation = 'slide 2s ease-in-out infinite'; // Trigger animation
    }

    // JavaScript and localStorage to Store Feedback
    function saveFeedback() {
      const feedback = document.getElementById('feedbackInput').value.trim();
      const message = document.getElementById('message');

      if (feedback) {
        localStorage.setItem('feedback', feedback); // Save to localStorage
        message.textContent = 'Feedback saved successfully!';
      } else {
        message.textContent = 'Please enter your feedback.';
      }
    }

    // Optional: Retrieve Feedback on Page Load
    window.onload = () => {
      const savedFeedback = localStorage.getItem('feedback');
      const message = document.getElementById('message');
      if (savedFeedback) {
        message.textContent = `Saved Feedback: "${savedFeedback}"`;
      }
    };
  </script>
</body>
</html>
