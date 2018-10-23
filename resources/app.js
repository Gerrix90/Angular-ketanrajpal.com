angular
  .module("app", ["ngRoute"])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
      templateUrl: "./resources/components/index.html",
      controller: function AppHomeController($scope) {
        $scope.h1 =
          "Hello, I'm Ketan Rajpal, a passionate & versatile Full Stack Developer & Digital Designer (UI/UX) living in New Delhi, India";
        $scope.h2 =
          "I am a passionate, successful, and multi-award winning Full Stack Developer with more than 8 years of multidisciplinary experience in Software and Web Application Development; Digital Design and Branding; IT Operations; and Digital Marketing.";
      }
    });
    $locationProvider.html5Mode(true);
  })
  .controller("ngNavController", function($scope) {
    $scope.nav = function(event) {
      if (event === "open") {
        document.getElementById("navigation").classList.remove("close");
        document.getElementById("navigation").classList.add("open");
      }
      if (event === "close") {
        document.getElementById("navigation").classList.add("close");
        document.getElementById("navigation").classList.remove("open");
      }
    };
  })
  .component("appHeader", {
    templateUrl: "./resources/components/header.html",
    controller: function AppHeaderController($scope) {
      $scope.name = "Ketan Rajpal";
      $scope.phone = "+91 9871302275";
      $scope.email = "hi@ketanrajpal.com";
      $scope.titles = [
        "Front End Developer",
        "Full Stack Developer",
        "Website Designer & Developer",
        "Digital Designer",
        "User Interface Designer",
        "User Experience Designer",
        "Digital Marketier (SEO & SMO)",
        "Photographer"
      ];
    }
  })
  .component("appNav", {
    templateUrl: "./resources/components/nav.html",
    controller: function AppNavController($scope, $location) {
      $scope.navigation = [
        { url: "/about", label: "about", icon: "fas fa-user-circle" },
        { url: "/portfolio", label: "portfolio", icon: "fas fa-paint-brush" },
        { url: "/photography", label: "photography", icon: "fas fa-camera" },
        { url: "/services", label: "services", icon: "fas fa-gavel" },
        { url: "/blog", label: "blog", icon: "fas fa-pen" },
        { url: "/contact", label: "contact", icon: "fas fa-phone" }
      ];
      $scope.getClass = function(path) {
        return $location.path() === path ? "current" : "";
      };
    }
  })
  .component("appFooter", {
    templateUrl: "./resources/components/footer.html",
    controller: function AppFooterController($scope) {
      var date = new Date();
      $scope.year = date.getFullYear();
      $scope.social = [
        {
          url: "https://www.facebook.com/ketanrajpal",
          icon: "fab fa-facebook",
          label: "facebook"
        },
        {
          url: "https://www.instagram.com/ketanrajpal/",
          icon: "fab fa-instagram",
          label: "instagram"
        },
        {
          url: "https://www.github.com/ketanrajpal",
          icon: "fab fa-github",
          label: "github"
        },
        {
          url: "https://www.linkedin.com/in/ketanrajpal/",
          icon: "fab fa-linkedin",
          label: "linkedin"
        },
        {
          url: "skype:ketan.rajpal?call",
          icon: "fab fa-skype",
          label: "skype"
        },
        {
          url: "https://www.paypal.me/krajpal",
          icon: "fab fa-paypal",
          label: "paypal"
        },
        {
          url: "tel:+91(0)9871302275",
          icon: "fa fa-phone",
          label: "phone"
        }
      ];
    }
  });
