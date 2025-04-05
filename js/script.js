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

const ctx = document.getElementById("gaugeChart").getContext("2d");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Completed", "Delayed", "On-going", "Remaining"],
    datasets: [
      {
        data: [30, 42, 36, 10],
        backgroundColor: ["#00a651", "#f8d31d", "#f36c21", "#e5e5e5"],
        borderWidth: 0,
        borderRadius: 10,
      },
    ],
  },
  options: {
    responsive: true,
    rotation: -90,
    circumference: 180,
    cutout: "90%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
});

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

const emotionChart = document
  .getElementById("multiSeriesPieChart")
  .getContext("2d");

// Multi-Series Pie Chart
// 3-Series Multi-Layer Pie Chart
const multiSeriesChart = new Chart(emotionChart, {
  type: "doughnut",
  data: {
    datasets: [
      {
        // Inner Ring
        data: [95], // Values for the first ring
        backgroundColor: ["rgba(89, 165, 165, 1", "rgba(246, 244, 244, 1)"],
        hoverOffset: 1,
        weight: 0.7,
        borderRadius: 10, // Size of the inner ring
      },
      {
        // Middle Ring
        data: [50, 50], // Values for the second ring
        backgroundColor: ["rgba(89, 165, 165, 0.8)", "rgba(246, 244, 244, 1)"],
        hoverOffset: 2,
        weight: 0.7,
        borderRadius: 10, // Size of the middle ring
      },
      {
        // Outer Ring
        data: [15, 100], // Values for the third ring
        backgroundColor: ["rgba(89, 165, 165, 0.4)", "rgba(246, 244, 244, 1)"],
        hoverOffset: 2,
        weight: 0.7,
        borderRadius: 10,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the top header label
      },
      tooltip: {
        enabled: true, // Tooltips on hover
      },
    },
    cutout: "40%", // Cutout size for doughnut effect
  },
});

//..............................

document.addEventListener("DOMContentLoaded", function () {
  var progressBar = document.querySelectorAll(".progress-bar");
  var time = 1500;

  progressBar.forEach(function (i) {
    let label = i.children[0];
    let line = i.children[1];
    let count = 0;
    let dataCount = label.getAttribute("data-count");
    let lineCount = line.children[0];

    let runTime = time / dataCount;

    let animationLineCount = setInterval(function () {
      if (count < dataCount) {
        count++;
        label.innerHTML = count + "%";
        lineCount.style.width = count + "%";
      }
    }, runTime);
  });
});

//...................................................................

const summaryChart = document.getElementById("semiDoughnut").getContext("2d");

new Chart(summaryChart, {
  type: "doughnut",

  data: {
    labels: ["5 hours"],
    datasets: [
      {
        data: [100],
        backgroundColor: ["#158080"],
        hoverOffset: 1,
        borderWidth: 1,
      },
    ],
  },
  options: {
    rotation: -90,
    circumference: 180,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "80%",
  },
});

//...........................................

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

//.......................

const mostUsedSkillsCtx = document
  .getElementById("mostUsedSkillsChart")
  .getContext("2d");

const dataskill = {
  labels: ["JavaScript", "Python", "HTML", "CSS", "React"], // Skill names
  datasets: [
    {
      data: [25, 20, 15, 10, 20], // Skill usage percentages
      backgroundColor: [
        "#5C67F7", // JavaScript (Red)
        "#FFC90C", // Python (Blue)
        "#FB4242", // HTML (Yellow)
        "#0BA734", // CSS (Teal)
      ],
      hoverOffset: 10,
      weight: 0.7,
      borderWidth: 2,
      borderRadius: 10,
    },
  ],
};

const optionskills = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const skill = data.labels[tooltipItem.dataIndex];
          const value = data.datasets[0].data[tooltipItem.dataIndex];
          return `${skill}: ${value}%`;
        },
      },
    },
    legend: {
      position: "right",
      labels: {
        font: {
          size: 10,
        },
        color: "#343a40", // Text color for legend

        usePointStyle: false, // Use circular icons in the legend
        boxWidth: 20, // Width of the legend box
        boxHeight: 10,

        borderRadius: 10, // Height of the legend box
      },
    },
  },

  responsive: true,
  maintainAspectRatio: false,

  cutout: "80%", // Adjusts the doughnut's inner cutout size // Adjusts the size for better responsiveness
};

new Chart(mostUsedSkillsCtx, {
  type: "doughnut",
  data: dataskill,
  options: optionskills,
});

//.......................

const mostUsedtooCtx = document
  .getElementById("mostUsedSkillsChart")
  .getContext("2d");

const datatool = {
  labels: ["JavaScript", "Python", "HTML", "CSS", "React"], // Skill names
  datasets: [
    {
      data: [25, 20, 15, 10, 20], // Skill usage percentages
      backgroundColor: [
        "#5C67F7", // JavaScript (Red)
        "#FFC90C", // Python (Blue)
        "#FB4242", // HTML (Yellow)
        "#0BA734", // CSS (Teal)
      ],
      hoverOffset: 10,
      weight: 0.7,
      borderWidth: 2,
      borderRadius: 10,
    },
  ],
};

const optionstool = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const skill = data.labels[tooltipItem.dataIndex];
          const value = data.datasets[0].data[tooltipItem.dataIndex];
          return `${skill}: ${value}%`;
        },
      },
    },

    legend: {
      position: "right",
      labels: {
        font: {
          size: 10,
        },
        color: "#343a40", // Text color for legend

        usePointStyle: false, // Use circular icons in the legend
        boxWidth: 20, // Width of the legend box
        boxHeight: 10,

        borderRadius: 10, // Height of the legend box
      },
    },
  },

  responsive: true,
  maintainAspectRatio: false,

  cutout: "80%", // Adjusts the doughnut's inner cutout size // Adjusts the size for better responsiveness
};

new Chart(mostUsedtoolChart, {
  type: "doughnut",
  data: datatool,
  options: optionstool,
});

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

const gradientgraphctx = document
  .getElementById("gradientLineChart")
  .getContext("2d");

// Create a gradient for the line fill
const gradientFill = gradientgraphctx.createLinearGradient(0, 0, 0, 300);
gradientFill.addColorStop(0, "#59A5A5"); // Start with semi-transparent color
gradientFill.addColorStop(1, "rgba(75, 192, 192, 0)"); // Fade to transparent

// Create a gradient for the line stroke
const gradientStroke = gradientgraphctx.createLinearGradient(0, 0, 600, 0);
gradientStroke.addColorStop(0, "#59A5A5");
gradientStroke.addColorStop(1, "rgba(54, 162, 235, 0.2)");

const gradientLineChart = new Chart(gradientgraphctx, {
  type: "line",
  data: {
    // Only show primary labels (W1, W2, W3, W4)
    labels: ["W1", "", "W2", "", "W3", "", "W4"], // Empty labels for intermediate points
    datasets: [
      {
        label: "Weekly Sales",
        // Add intermediate values to the dataset
        data: [10, 40, 70, 45, 20, 35, null], // Include intermediate values
        fill: true, // Enable gradient fill
        backgroundColor: gradientFill, // Gradient fill for the area
        borderColor: gradientStroke, // Gradient color for the line
        borderWidth: 2,
        tension: 0.1, // Smooth curve
        pointRadius: 0, // No points on the line
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 50, // Top padding
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on X-axis
        },
        title: {
          display: true, // Display title if needed
        },
      },
      y: {
        beginAtZero: true, // Start Y-axis at zero
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // Light grid lines
        },
        ticks: {
          stepSize: 50, // Step size for Y-axis
        },
      },
    },
  },
});
