//.......................
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".wr-sidebar-toggle");
  const sidebar = document.querySelector(".wr-sidebar");

  if (toggleButton && sidebar) {
    toggleButton.addEventListener("click", (event) => {
      event.preventDefault();
      sidebar.classList.toggle("collapsed");
    });
  } else {
    console.warn("Sidebar toggle elements not found on this page.");
  }
});
//...................................

document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".wr-mob-menu");
  const sidebars = document.querySelectorAll(".wr-sidebar");

  toggleButtons.forEach((toggleButton, index) => {
    toggleButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent click from propagating to the document
      const sidebar = sidebars[index];
      if (sidebar) {
        sidebar.classList.toggle("active");
      }
    });
  });

  // Close sidebar on clicking outside
  document.addEventListener("click", (e) => {
    sidebars.forEach((sidebar) => {
      if (sidebar.classList.contains("active") && !sidebar.contains(e.target)) {
        sidebar.classList.remove("active");
      }
    });
  });
});

// need
//.........................................

var multipleBargraphctx = document
  .getElementById("multipleBarChart")
  .getContext("2d");
var multipleBarChart = new Chart(multipleBargraphctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Task",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "#E8E8E8",
        barBorderRadius: 6,
        barThickness: 25,
      },
      {
        label: "Project",
        data: [22, 15, 30, 12, 7],
        backgroundColor: "#299D91",
        barBorderRadius: 6,
        barThickness: 25,
      },
    ],
  },
  options: {
    responsive: true,
    legend: {},
    layout: {
      padding: {
        top: 30, // Padding for the top
        right: 30, // Padding for the right
        bottom: 30, // Padding for the bottom
        left: 30, // Padding for the left
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Y-axis starts from zero
      },
      x: {
        barPercentage: 0.5, // Reduce bar width
        categoryPercentage: 0.5, // Adjust space between ba
        grid: {
          display: false, // Disable grid lines on the Y-axis
        },
      },
    },
  },
});

//..........................

const chart = document.getElementById("lineChart").getContext("2d");

// Create the chart
new Chart(chart, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis labels
    datasets: [
      {
        label: "Data",
        data: [10, 20, 15, 30, 25, 40, 35], // Smooth curve data points
        borderColor: "rgba(0, 116, 116, 1)", // Teal line color
        borderWidth: 3,
        fill: false,
        tension: 0.4, // Smooth curve
      },
      {
        label: "Reference Line",
        data: [20, 20, 20, 20, 20, 20, 20], // Horizontal reference line
        borderColor: "#d3d3d3", // Grey color
        borderWidth: 2,
        borderDash: [5, 5], // Dashed line
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        display: false, // Hide y-axis labels
        grid: {
          display: false, // Hide horizontal grid lines
        },
      },
      y: {
        display: false, // Hide y-axis labels
        grid: {
          display: false, // Hide horizontal grid lines
        },
      },
    },
  },
});

//..............................................

const reportOverview = document
  .getElementById("stackedBarLineChart")
  .getContext("2d");

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Trend Line",
      data: [20, 30, 40, 30, 20, 10],

      type: "line",
      borderColor: "rgba(21, 128, 128, 1)",
      borderWidth: 2,
      pointBackgroundColor: "#fff",
      tension: 0.4,
      fill: false,
    },
    {
      label: "Category A",
      data: [30, 40, 20, 30, 50, 40],
      backgroundColor: [
        "rgba(233, 236, 241, 1)",
        "rgba(233, 236, 241, 1)",

        "rgba(233, 236, 241, 1)",
        "rgba(89, 165, 165, 1)",
        "rgba(233, 236, 241, 1)",
        "rgba(233, 236, 241, 1)",
      ],
    },
  ],
};

const options = {
  plugins: {
    tooltip: {
      mode: "index",
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true, // Stacks bars on the X-axis
      ticks: {
        display: false, // Hides X-axis labels
      },
      grid: {
        display: false, // Removes X-axis grid lines
      },
    },
    y: {
      stacked: false, // Does not stack the Y-axis for the line
      beginAtZero: true, // Starts the Y-axis at 0
      ticks: {
        stepSize: 10, // Step size for ticks
        callback: function (value) {
          // Show only specific values
          if ([10, 30, 50].includes(value)) {
            return value;
          }
          return "";
        },
      },
      grid: {
        display: true, // Shows Y-axis grid lines
      },
    },
  },
};

new Chart(reportOverview, {
  type: "bar", // Base chart type
  data: data,
  options: options,
});

//...............................................
