export function dbExample(): any {
   return {
      "qforms": 2,
      "rows": [
          {
              "editable": false,
              "id": 0,
              "name": "Urology",
              "last_updated": "2021-12-17T02:24:00.000Z",
              "field": "Urology",
              "creator": "Andreis PURIM",
              "preview": "http://services.epnet.com/getimage.aspx?imageiid=7432",
              "creator_avatar": "https://andreispurim.github.io/images/andreis.jpg",
              "creator_id": 1201,
              "keywords": [
                  "Urology",
                  "MRI"
              ],
              "questions": 17,
              "uses": 15,
              "description": "This is a complete urology report made in 2020 for all urology based-scans used by the CHU Lille.",
              "paragraph": "This is a complete urology report made in 2020 for all urology based-scans used by the CHU Lille."
          },
          {
              "editable": false,
              "id": 1,
              "name": "Respiratory",
              "last_updated": "2021-12-15T02:24:00.000Z",
              "field": "Respiratory",
              "creator": "Guilherme Ramirez",
              "preview": "https://www.researchgate.net/profile/John-Magnussen/publication/13354345/figure/fig2/AS:601775111409672@1520485775964/Lung-scan-in-eight-standard-views-of-8-mm3-block-sizes-involving-42-of-lung-tissue-In.png",
              "creator_avatar": "https://andreispurim.github.io/images/andreis.jpg",
              "creator_id": 999,
              "keywords": [
                  "Respiratory","System"
              ],
              "questions": 2,
              "uses": 1,
              "description": "A public CR created by the CHU Lille for respiratory scans used since 2018. It is release phase"
          },
      ],
      "columns": [
          {
              "id": "favorite",
              "label": "Favorites",
              "default": true,
              "minWidth": 0,
              "align": "center"
          },
          {
              "id": "name",
              "label": "Title",
              "default": true,
              "minWidth": 170,
              "align": "left"
          },
          {
              "id": "field",
              "label": "Area",
              "default": true,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "creator",
              "label": "Creator",
              "default": true,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "uses",
              "label": "Uses",
              "default": true,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "last_updated",
              "label": "Last update",
              "default": false,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "keywords",
              "label": "Keywords",
              "default": false,
              "minWidth": 100,
              "align": "right"
          }
      ],
      "users": {
          "andreis": {
              "id": 1201,
              "username": "andreis",
              "password": "123",
              "admin": true,
              "description": "Student",
              "joined": "2021-02-05",
              "last_seen": "2022-02-05",
              "avatar": "abc",
              "chips": [
                  {
                      "type": "work",
                      "label": "Samsung"
                  },
                  {
                      "type": "study",
                      "label": "Unicamp"
                  },
                  {
                      "type": "favorites",
                      "label": "0 Favorites"
                  },
                  {
                      "type": "created",
                      "label": "0 Created"
                  }
              ],
              "favorites": [
                  0
              ],
              "recents": {
                  "1": "2021-12-14T02:24:00.000Z"
              },
              "created": [
                  0
              ]
          },
          "scholze": {
              "id": 999,
              "username": "scholze",
              "password": "123",
              "admin": false,
              "description": "blablabla",
              "joined": "2021-03-05",
              "last_seen": "2022-02-05",
              "avatar": "scholze",
              "chips": [
                  {
                      "type": "study",
                      "label": "Unicamp"
                  },
                  {
                      "type": "favorites",
                      "label": "0 Favorites"
                  },
                  {
                      "type": "created",
                      "label": "0 Created"
                  }
              ],
              "favorites": [],
              "recents": [],
              "created": []
          }
      },
      "forms": {
        "0": {
            "formatted": {
                "questions": [
                    {
                        "isRequired": true,
                        "name": "identifier",
                        "title": "Patient ID",
                        "type": "text"
                    },
                    {
                        "isRequired": true,
                        "name": "patient_first_name",
                        "title": "Patient name",
                        "type": "text"
                    },
                    {
                        "isRequired": true,
                        "name": "patient_name",
                        "title": "Patient surname",
                        "type": "text"
                    },
                    {
                        "isRequired": true,
                        "name": "patient_birth",
                        "title": "Patient's birthday",
                        "type": "text"
                    },
                    {
                        "choices": [
                            "CT scan",
                            "Ultrasonography",
                            "Radiography AND US"
                        ],
                        "name": "exam_type",
                        "title": "Type of examination",
                        "type": "dropdown"
                    },
                    {
                        "choices": [
                            "No",
                            "IV",
                            "IV late phase",
                            "Urinary tract injection",
                            "NA"
                        ],
                        "name": "exam_indication",
                        "title": "Contrast Agent",
                        "type": "dropdown"
                    },
                    {
                        "choices": [
                            "Low dose",
                            "Standard dose",
                            "NA"
                        ],
                        "name": "condition_contrast",
                        "title": "Acute phase / clinical crisis at the time of the exam",
                        "type": "dropdown"
                    },
                    {
                        "choices": [
                            "No",
                            "Yes",
                            "Unknown",
                            "NA"
                        ],
                        "name": "condition_fever",
                        "title": "Patient febrile at the time of the exam",
                        "type": "dropdown"
                    },
                    {
                        "choices": [
                            "No",
                            "Bladder drainage",
                            "Upper tract drainage",
                            "NA"
                        ],
                        "name": "condition_derivation",
                        "title": "Urinary tract diversion in place at the time of the exam",
                        "type": "dropdown"
                    },
                    {
                        "choices": [
                            "No",
                            "Yes",
                            "Unknown",
                            "NA"
                        ],
                        "name": "abnormal_liver",
                        "title": "Liver anomaly detected",
                        "type": "dropdown"
                    },
                    {
                        "choices": [
                            "No",
                            "Yes",
                            "Unknown",
                            "NA"
                        ],
                        "name": "abnormal_adrenals",
                        "title": "Adrenals anomaly detected",
                        "type": "dropdown"
                    },
                    {
                        "choices": [
                            "No",
                            "Yes",
                            "Unknown",
                            "NA"
                        ],
                        "name": "abnormal_pancreas",
                        "title": "Pancreas anomaly detected",
                        "type": "dropdown"
                    },
                    {
                        "choices": [
                            "No",
                            "Yes",
                            "Unknown",
                            "NA"
                        ],
                        "name": "abnormal_spleen",
                        "title": "Splenic anomaly detected",
                        "type": "dropdown"
                    },
                    {
                        "choices": [
                            "No",
                            "Yes",
                            "Unknown",
                            "NA"
                        ],
                        "name": "abnormal_ovaries",
                        "title": "Ovarian anomaly detected",
                        "type": "dropdown"
                    },
                    {
                        "choices": [
                            "No",
                            "Yes",
                            "Unknown",
                            "NA"
                        ],
                        "name": "abnormal_lymphnode",
                        "title": "Abnormal lymphnode detected",
                        "type": "dropdown"
                    }
                ],
                "template": {
                    "exam_indication": {
                        "complete": true,
                        "begin": "This is a sample text to check the exam_indication variabe, which user chose ",
                        "end": " as an answer"
                    },
                    "conditition_contrast": {
                        "Low dose": "He chose L O W D O S E",
                        "Standart Dose": "He chose STANDARDDOSE",
                        "NA": "He chose None of the Above"
                    },
                    "condition_fever": {
                        "No": "Patient does not has fever",
                        "Yes": "<b>Patient HAS fever</b>",
                        "Unknown": "Condition about the fever is unknown",
                        "NA": "Not know inf patient has fever"
                    }
                },
                "svg": {
                    "name": "Urinary",
                    "begin": "<svg id=\"svgDiv\" viewBox=\"0 0 820 800\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">",
                    "end": "</svg>",
                    "organs": [
                        [
                            "<path id=\"left_ureter\" class=\"cls-1\" d=\"M 315.556 659.001 C 317.345 657.795 308.314 640.908 303.594 632.086 C 303.594 632.086 286.663 600.431 282.66 590.22 C 281.575 587.449 282.842 590.473 273.7 557.324 C 270.628 546.198 268.455 538.486 267.719 527.42 C 267.354 521.9 267.54 518.499 267.719 512.467 C 268.359 491.007 267.345 489.324 267.719 470.601 C 267.949 459.081 268.289 444.31 270.711 425.743 C 272.631 410.943 273.825 409.974 276.692 392.847 C 280.929 367.535 282.045 347.727 282.673 336.028 C 283.633 318.179 284.445 302.905 282.673 282.201 C 281.777 271.753 280.692 259.062 276.692 243.324 C 274.724 235.577 269.533 217.199 255.757 192.486 C 229.069 144.623 190.343 109.145 186.964 111.759 C 186.714 111.951 186.81 112.236 186.964 114.748 C 186.964 114.748 187.348 121.02 186.964 129.702 C 186.749 134.521 186.471 140.815 183.975 147.644 C 180.205 157.948 173.434 163.862 175.015 165.586 C 175.552 166.178 176.695 165.858 178.007 165.586 C 178.007 165.586 179.082 165.362 192.957 165.586 C 197.629 165.663 213.034 171.103 231.834 195.491 C 257.607 228.924 264.628 265.356 264.73 282.211 L 264.73 327.055 C 264.986 351.919 266.039 353.151 264.73 362.943 C 264.071 367.871 263.716 368.227 261.738 380.886 C 261.098 384.908 259.882 392.815 258.749 401.82 C 256.932 416.255 257.553 416.102 255.757 431.724 C 254.042 446.662 253.197 449.087 252.769 458.636 C 252.378 466.956 252.637 473.036 252.769 476.582 C 253.658 500.943 252.49 515.407 252.769 527.42 C 253.562 561.66 266.442 590.012 270.711 599.19 C 287.213 634.707 313.095 660.655 315.556 659.001 Z\" style=\"fill: rgb(255, 238, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>",
                            "<path class=\"cls-2\" d=\"M 323.748 663.98 C 325.698 663.023 313.622 651.238 302.506 629.341 C 288.019 600.788 285.942 576.281 285.514 569.505 C 285.514 569.387 285.514 569.472 285.514 541.16 C 285.514 518.501 285.514 507.169 285.514 506.519 C 285.408 475.761 285.027 476.287 285.514 468.728 C 285.842 463.674 287.154 453.732 289.765 434.086 C 292.364 414.5 292.614 413.62 294.011 402.594 C 295.204 393.158 296.243 383.568 298.261 364.804 C 300.914 340.126 302.247 327.648 302.506 320.713 C 302.892 310.468 302.35 312.345 302.506 286.073 C 302.651 262.1 303.097 261.385 302.506 254.579 C 301.418 241.8 298.572 229.137 294.011 216.788 C 291.62 210.385 284.979 194.015 268.523 172.7 C 266.276 169.788 245.302 140.787 213.916 120.059 C 210.833 118.037 198.864 110.266 192.059 112.865 C 189.787 113.727 187.715 116.571 183.563 122.3 C 182.098 124.322 181.441 125.373 179.313 128.598 C 176 133.629 173.598 137.269 170.817 141.194 C 165.54 148.643 162.902 152.366 162.343 152.99 C 159.54 156.059 157.022 158.206 158.076 160.104 C 158.908 161.603 161.599 162.26 163.641 162.755 C 165.954 163.311 168.405 163.48 170.817 163.251 C 181.509 165.823 188.064 168.086 192.059 169.549 C 192.551 169.731 193.074 169.93 193.651 170.189 C 200.168 173.121 203.651 176.994 205.719 179.346 C 211.701 186.086 206.628 179.308 217.538 191.595 C 224.275 199.178 227.643 202.969 230.302 206.473 C 238.375 217.126 242.411 222.452 243.031 229.389 C 243.031 229.607 243.031 229.473 243.031 241.985 L 243.031 251.421 C 243.031 255.903 243.221 260.593 244.394 275.549 C 245.408 288.692 245.507 288.017 246.134 296.894 C 246.63 303.897 247.043 309.787 247.298 317.555 C 247.586 326.697 247.752 332.615 247.298 339.598 C 246.63 349.37 245.247 352.585 243.047 364.794 C 241.434 373.731 241.489 375.005 238.797 399.433 C 236.839 417.256 236.766 414.743 234.552 434.076 C 231.325 462.302 229.72 476.637 230.302 487.613 C 230.997 500.638 233.112 513.487 234.552 522.255 C 235.944 530.704 236.947 536.834 238.797 544.298 C 244.539 567.446 253.691 584.537 255.794 588.391 C 266.09 607.26 277.435 620.201 285.528 629.33 C 301.533 647.41 321.32 665.177 323.748 663.98 Z\" style=\"fill: rgb(212, 0, 0); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>"
                        ],
                        [
                            "<path id=\"right_ureter\" class=\"cls-1\" d=\"M 652.605 114.843 C 654.394 116.049 645.363 132.936 640.643 141.758 C 640.643 141.758 623.712 173.413 619.709 183.624 C 618.624 186.395 619.891 183.371 610.749 216.52 C 607.677 227.646 605.504 235.358 604.768 246.424 C 604.403 251.944 604.589 255.346 604.768 261.378 C 605.408 282.837 604.394 284.52 604.768 303.243 C 604.999 314.763 605.338 329.534 607.76 348.101 C 609.68 362.901 610.874 363.87 613.741 380.997 C 617.978 406.309 619.095 426.117 619.722 437.816 C 620.682 455.666 621.495 470.939 619.722 491.643 C 618.826 502.091 617.741 514.782 613.741 530.52 C 611.773 538.267 606.583 556.645 592.807 581.358 C 566.119 629.221 527.392 664.699 524.013 662.085 C 523.763 661.893 523.859 661.608 524.013 659.096 C 524.013 659.096 524.397 652.824 524.013 644.142 C 523.799 639.323 523.52 633.029 521.024 626.2 C 517.255 615.896 510.483 609.982 512.064 608.258 C 512.602 607.666 513.744 607.986 515.056 608.258 C 515.056 608.258 516.131 608.482 530.007 608.258 C 534.679 608.181 550.083 602.741 568.883 578.354 C 594.656 544.92 601.677 508.488 601.779 491.634 L 601.779 446.789 C 602.035 421.925 603.088 420.693 601.779 410.901 C 601.12 405.973 600.765 405.618 598.787 392.958 C 598.147 388.936 596.931 381.029 595.799 372.024 C 593.981 357.589 594.602 357.742 592.807 342.12 C 591.091 327.182 590.247 324.757 589.818 315.208 C 589.427 306.888 589.687 300.808 589.818 297.262 C 590.707 272.901 589.539 258.437 589.818 246.424 C 590.611 212.184 603.491 183.832 607.76 174.654 C 624.263 139.138 650.144 113.189 652.605 114.843 Z\" style=\"fill: rgb(255, 238, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\" transform=\"matrix(-1, 0, 0, -1, 1164.665192, 776.988724)\"></path>",
                            "<path class=\"cls-2\" d=\"M 656.805 119.096 C 658.63 120.056 647.328 131.877 636.924 153.841 C 623.364 182.48 621.421 207.062 621.019 213.858 C 621.019 213.977 621.019 213.891 621.019 242.289 C 621.019 265.017 621.019 276.384 621.019 277.036 C 620.92 307.886 620.563 307.359 621.019 314.941 C 621.327 320.011 622.555 329.983 624.998 349.688 C 627.431 369.333 627.665 370.217 628.972 381.276 C 630.089 390.741 631.061 400.36 632.951 419.181 C 635.433 443.934 636.68 456.45 636.924 463.406 C 637.285 473.682 636.777 471.799 636.924 498.151 C 637.059 522.197 637.477 522.914 636.924 529.74 C 635.905 542.558 633.241 555.26 628.972 567.646 C 626.734 574.069 620.518 590.488 605.117 611.868 C 603.013 614.788 583.383 643.877 554.007 664.668 C 551.121 666.697 539.919 674.492 533.549 671.885 C 531.423 671.02 529.484 668.167 525.597 662.421 C 524.227 660.392 523.612 659.339 521.619 656.103 C 518.519 651.058 516.271 647.407 513.668 643.47 C 508.73 635.998 506.26 632.264 505.736 631.637 C 503.113 628.56 500.757 626.406 501.742 624.502 C 502.522 622.999 505.04 622.34 506.951 621.843 C 509.116 621.286 511.409 621.116 513.668 621.346 C 523.676 618.765 529.811 616.496 533.549 615.029 C 534.01 614.846 534.499 614.646 535.04 614.387 C 541.139 611.446 544.399 607.561 546.335 605.202 C 551.934 598.441 547.185 605.239 557.397 592.916 C 563.703 585.31 566.855 581.507 569.344 577.993 C 576.899 567.307 580.677 561.965 581.257 555.006 C 581.257 554.788 581.257 554.923 581.257 542.373 L 581.257 532.908 C 581.257 528.412 581.435 523.708 582.533 508.707 C 583.482 495.524 583.574 496.2 584.161 487.296 C 584.625 480.273 585.012 474.365 585.251 466.573 C 585.52 457.403 585.676 451.468 585.251 444.463 C 584.625 434.662 583.331 431.437 581.272 419.191 C 579.763 410.227 579.814 408.949 577.295 384.447 C 575.462 366.57 575.393 369.09 573.32 349.698 C 570.3 321.387 568.799 307.008 569.344 295.998 C 569.995 282.934 571.974 270.046 573.32 261.252 C 574.624 252.777 575.564 246.628 577.295 239.142 C 582.669 215.924 591.234 198.781 593.203 194.914 C 602.839 175.989 613.458 163.008 621.032 153.852 C 636.013 135.717 654.532 117.896 656.805 119.096 Z\" style=\"fill: rgb(212, 0, 0); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\" transform=\"matrix(-1, 0, 0, -1, 1158.513489, 791.451279)\"></path>"
                        ],
                        [
                            "<path id=\"bladder\" class=\"cls-1\" d=\"M 419.731 761.883 C 421.685 761.182 422.827 759.68 424.214 757.4 C 426.835 753.113 427.574 750.584 428.702 748.429 C 430.675 744.589 433.426 742.573 437.674 739.457 C 444.211 734.657 449.755 732.814 455.616 730.486 C 465.792 726.44 473.938 723.209 482.53 717.046 C 486.576 714.137 494.011 708.733 500.472 699.104 C 503.462 694.649 508.406 687.104 509.443 676.673 C 509.582 675.296 509.51 675.257 509.443 667.702 C 509.4 662.624 509.414 656.84 509.443 645.277 C 509.51 620.633 510.082 621.901 509.443 618.363 C 507.952 610.37 504.904 602.749 500.472 595.933 C 494.069 585.79 486.499 579.987 478.046 573.502 C 473.757 570.235 469.269 567.239 464.606 564.531 C 456.859 560.029 450.686 556.525 442.176 555.56 C 439.723 555.281 438.749 555.142 433.205 555.56 C 432.499 555.617 423.763 555.598 406.291 555.56 C 376.57 555.502 378.134 554.859 374.894 555.56 C 361.934 558.363 353.026 565.107 347.976 569 C 337.704 576.953 332.482 585.099 325.55 595.913 C 318.907 606.277 313.478 614.955 312.11 627.315 C 311.875 629.413 312.053 628.985 312.11 640.755 C 312.23 664.496 311.515 666.545 312.11 672.157 C 313.867 688.688 323.208 700.553 325.55 703.558 L 325.55 703.558 C 332.75 710.758 347.016 725.024 365.923 730.472 C 373.266 732.566 380.765 734.066 388.349 734.955 C 393.826 734.955 398.52 735.809 401.789 739.443 C 402.835 740.6 403.982 743.206 406.272 748.414 C 407.467 751.131 408.552 753.848 410.76 757.385 C 412.358 759.949 413.482 761.225 415.243 761.869 C 416.696 762.375 418.275 762.38 419.731 761.883 Z\" style=\"fill: rgb(255, 238, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>"
                        ],
                        [
                            "<path id=\"left_kidney\" class=\"cls-3\" d=\"M 115.071 247.607 C 122.751 244.95 132.994 241.424 141.169 231.294 C 141.784 230.533 155.297 213.375 150.944 195.411 C 149.547 189.56 145.823 181.978 144.416 179.098 C 141.047 172.2 139.787 171.344 137.891 166.049 C 136.057 160.787 134.96 155.298 134.631 149.736 C 134.17 143.368 135.06 143.221 134.631 136.687 C 134.201 130.152 133.933 125.208 131.367 120.377 C 126.692 111.597 117.822 108.232 118.318 107.324 C 118.747 106.546 125.156 109.419 128.092 110.588 C 145.851 117.57 168.123 113.032 183.552 104.064 C 189.644 100.524 200.309 94.324 206.386 81.226 C 206.945 80.026 213.12 66.264 209.65 51.868 C 202.536 22.342 158.645 5.819 124.821 6.193 C 102.563 6.441 85.353 14.005 75.886 19.242 C 51.345 32.825 39.58 52.5 30.214 68.177 C 24.775 77.278 11.409 101.875 7.377 136.687 C 5.233 155.188 3.261 172.248 10.641 192.147 C 21.239 220.72 47.815 246.256 79.15 250.871 C 97.323 253.548 112.387 248.532 115.071 247.607 Z\" style=\"fill: rgb(255, 170, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>",
                            "<path class=\"cls-2\" d=\"M 158.014 215.905 C 159.29 217.755 145.693 228.621 127.073 235.905 C 115.829 240.305 96.565 247.83 75.497 244.467 C 28.809 237.028 12.001 182.225 10.169 175.906 C 6.468 163.146 6.586 153.443 6.729 141.618 C 6.94 124.775 7.318 93.694 27.362 61.62 C 36.951 46.272 61.229 7.413 109.879 -1.239 C 117.401 -2.575 148.143 -8.048 175.207 7.321 C 210.048 27.133 212.422 66.297 209.588 67.321 C 208.286 67.793 205.358 58.345 195.835 55.893 C 193.706 55.342 184.622 53.448 168.33 64.454 C 141.557 82.571 132.333 110.559 127.073 127.312 C 127.073 127.312 118.159 155.69 123.633 190.168 C 124.26 194.143 126.013 203.162 133.933 210.169 C 135.827 211.845 139.085 214.645 144.235 215.884 C 151.731 217.696 157.252 214.801 158.014 215.905 Z\" style=\"fill: rgb(212, 0, 0); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>"
                        ],
                        [
                            "<path id=\"right_kidney\" class=\"cls-3\" d=\"M 722.276 11.944 C 729.956 14.601 740.198 18.127 748.374 28.257 C 748.988 29.018 762.501 46.176 758.148 64.14 C 756.752 69.991 753.027 77.574 751.62 80.454 C 748.251 87.352 746.991 88.207 745.096 93.503 C 743.261 98.764 742.164 104.253 741.835 109.816 C 741.374 116.183 742.265 116.33 741.835 122.865 C 741.406 129.4 741.137 134.343 738.571 139.174 C 733.897 147.954 725.026 151.319 725.522 152.227 C 725.952 153.005 732.361 150.132 735.297 148.963 C 753.055 141.981 775.327 146.519 790.757 155.487 C 796.848 159.027 807.513 165.227 813.591 178.325 C 814.149 179.526 820.325 193.287 816.855 207.683 C 809.74 237.209 765.849 253.732 732.026 253.358 C 709.768 253.11 692.557 245.546 683.09 240.309 C 658.549 226.726 646.785 207.051 637.419 191.374 C 631.98 182.273 618.613 157.676 614.581 122.865 C 612.438 104.363 610.465 87.303 617.845 67.404 C 628.443 38.831 655.02 13.295 686.354 8.68 C 704.528 6.003 719.591 11.019 722.276 11.944 Z\" style=\"fill: rgb(255, 170, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\" transform=\"matrix(-1, 0, 0, -1, 1430.53241, 261.26618)\"></path>",
                            "<path class=\"cls-2\" d=\"M 763.522 36.173 C 764.711 34.323 752.043 23.457 734.694 16.173 C 724.218 11.773 706.269 4.248 686.64 7.611 C 643.14 15.05 627.48 69.853 625.773 76.172 C 622.325 88.932 622.434 98.635 622.568 110.46 C 622.765 127.303 623.116 158.384 641.791 190.458 C 650.726 205.806 673.346 244.665 718.674 253.317 C 725.683 254.653 754.325 260.126 779.541 244.757 C 812.003 224.945 814.215 185.781 811.575 184.757 C 810.361 184.285 807.634 193.733 798.76 196.185 C 796.778 196.736 788.313 198.63 773.134 187.624 C 748.189 169.507 739.594 141.519 734.694 124.766 C 734.694 124.766 726.388 96.388 731.489 61.91 C 732.073 57.935 733.706 48.916 741.086 41.909 C 742.85 40.233 745.886 37.433 750.684 36.194 C 757.669 34.382 762.812 37.277 763.522 36.173 Z\" style=\"fill: rgb(212, 0, 0); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\" transform=\"matrix(-1, 0, 0, -1, 1434.899841, 262.128242)\"></path>"
                        ],
                        [
                            "<path id=\"left_neuron\" class=\"cls-1\" d=\"M 197.597 120.714 C 196.505 117.682 192.538 117.599 185.218 114.016 C 185.218 114.016 175.961 109.493 164.564 97.273 C 143.166 74.338 153.816 39.681 139.775 36.99 C 139.457 36.932 139.775 36.99 135.641 36.99 C 116.366 36.922 112.653 35.281 110.853 36.99 C 107.984 39.721 115.473 45.769 123.232 60.434 C 125.531 64.77 131.19 76.176 131.495 90.576 C 131.707 101.197 128.789 103.261 127.361 103.971 C 122.67 106.297 115.058 103.448 110.836 100.62 C 107.741 98.563 107.357 96.983 102.573 90.586 C 92.604 77.233 90.84 77.026 90.194 77.191 C 87.67 77.818 91.636 86.275 86.065 90.586 C 81.599 94.037 73.886 92.603 73.687 93.933 C 73.51 95.03 78.7 96.284 81.949 97.284 C 94.801 101.226 106.897 110.36 110.871 120.724 C 112.096 123.924 114.236 129.5 110.871 134.123 C 106.596 139.99 76.653 136.807 69.557 137.471 C 68.674 137.553 62.267 138.152 61.295 140.821 C 60.557 142.839 63.642 144.089 65.424 147.519 C 68.735 153.88 63.142 159.245 65.424 160.914 C 68.271 162.996 77.886 154.905 90.212 150.88 C 107.401 145.251 131.402 146.939 135.66 154.231 C 143.542 167.713 86.207 204.566 86.083 204.466 C 85.959 204.366 95.632 194.493 110.871 191.067 C 114.987 190.142 121.322 188.795 127.397 191.067 C 135.527 194.113 137.848 201.649 139.775 201.101 C 141.469 200.635 138.86 195.116 139.775 187.706 C 139.775 187.706 141.508 173.607 156.301 164.261 C 158.657 162.771 161.04 161.269 164.564 160.914 C 168.542 160.513 170.368 161.95 172.826 160.914 C 174.992 159.997 175.532 158.048 176.956 154.217 C 178.21 150.834 179.957 147.576 181.089 144.183 C 185.355 131.235 199.79 126.82 197.597 120.714 Z\" style=\"fill: rgb(255, 238, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>"
                        ],
                        [
                            "<path id=\"right_neuron\" class=\"cls-1\" d=\"M 763.635 123.494 C 762.543 126.526 758.576 126.609 751.256 130.192 C 751.256 130.192 741.999 134.715 730.602 146.935 C 709.204 169.87 719.854 204.527 705.813 207.218 C 705.495 207.276 705.813 207.218 701.679 207.218 C 682.404 207.286 678.691 208.927 676.891 207.218 C 674.022 204.487 681.511 198.439 689.27 183.774 C 691.569 179.438 697.228 168.032 697.533 153.632 C 697.745 143.011 694.827 140.947 693.399 140.237 C 688.708 137.911 681.096 140.76 676.874 143.588 C 673.779 145.645 673.395 147.225 668.611 153.622 C 658.642 166.975 656.878 167.182 656.232 167.017 C 653.708 166.39 657.674 157.933 652.103 153.622 C 647.637 150.171 639.924 151.605 639.725 150.275 C 639.548 149.178 644.738 147.924 647.987 146.924 C 660.839 142.982 672.935 133.848 676.909 123.484 C 678.134 120.284 680.274 114.708 676.909 110.085 C 672.634 104.218 642.691 107.401 635.595 106.737 C 634.712 106.655 628.305 106.056 627.333 103.387 C 626.595 101.369 629.68 100.119 631.462 96.689 C 634.773 90.328 629.18 84.963 631.462 83.294 C 634.309 81.212 643.924 89.303 656.25 93.328 C 673.439 98.957 697.44 97.269 701.698 89.977 C 709.58 76.495 652.245 39.642 652.121 39.742 C 651.997 39.842 661.67 49.715 676.909 53.141 C 681.025 54.066 687.36 55.413 693.435 53.141 C 701.565 50.095 703.886 42.559 705.813 43.107 C 707.507 43.573 704.898 49.092 705.813 56.502 C 705.813 56.502 707.546 70.601 722.339 79.947 C 724.695 81.437 727.078 82.939 730.602 83.294 C 734.58 83.695 736.406 82.258 738.864 83.294 C 741.03 84.211 741.57 86.16 742.994 89.991 C 744.248 93.374 745.995 96.632 747.127 100.025 C 751.393 112.973 765.828 117.388 763.635 123.494 Z\" style=\"fill: rgb(255, 238, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\" transform=\"matrix(-1, 0, 0, -1, 1391.081299, 247.73468)\"></path>"
                        ]
                    ]
                }
            }
        },
        "3": {
            "id": 3,
            "card": 4,
            "questions": [
                {
                    "questionID": 0,
                    "dragID": "0",
                    "type": "Text",
                    "variable": "this_is_a_question",
                    "questionLabel": "This is a question",
                    "required": false,
                    "default": null,
                    "min": null,
                    "max": null,
                    "loopvar": false,
                    "others": false,
                    "qchoices": 0,
                    "choices": []
                },
                {
                    "questionID": 1,
                    "dragID": "1",
                    "type": "Text",
                    "variable": "this_is_an_obligatory_question",
                    "questionLabel": "This is an obligatory question!",
                    "required": true,
                    "default": null,
                    "min": null,
                    "max": null,
                    "loopvar": false,
                    "others": false,
                    "qchoices": 0,
                    "choices": []
                },
                {
                    "questionID": 2,
                    "dragID": "2",
                    "type": "Text",
                    "variable": "this_is_another_question",
                    "questionLabel": "This is another question",
                    "required": false,
                    "default": null,
                    "min": null,
                    "max": null,
                    "loopvar": false,
                    "others": false,
                    "qchoices": 0,
                    "choices": []
                }
            ],
            "qlength": 3,
            "outputs": [],
            "nodes": [],
            "qnodes": 0,
            "nodesUsedIDs": {},
            "selnode": null,
            "template": "<p><img class=\"qrcode\" width=\"200\" height=\"200\" src=\"https://andreispurim.github.io/Imagem1.png\"></p><p>User has answered the following:&nbsp;<med-var class=\"this_is_a_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_a_question</med-var>&nbsp;to the first,&nbsp;<med-var class=\"this_is_an_obligatory_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_an_obligatory_question</med-var>&nbsp;to the second</p><p>and&nbsp;<med-var class=\"this_is_another_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_another_question</med-var>&nbsp;to the final one. Congrats user!</p>",
            "svg": {
                "base": "",
                "parts": [],
                "used_variables": []
            },
            "formatted": {
                "questions": [
                    {
                        "isRequired": false,
                        "type": "text",
                        "name": "this_is_a_question",
                        "title": "This is a question",
                        "defaultAnswer": null
                    },
                    {
                        "isRequired": true,
                        "type": "text",
                        "name": "this_is_an_obligatory_question",
                        "title": "This is an obligatory question!",
                        "defaultAnswer": null
                    },
                    {
                        "isRequired": false,
                        "type": "text",
                        "name": "this_is_another_question",
                        "title": "This is another question",
                        "defaultAnswer": null
                    }
                ],
                "template": "<p><img class=\"qrcode\" width=\"200\" height=\"200\" src=\"https://andreispurim.github.io/Imagem1.png\"></p><p>User has answered the following:&nbsp;<med-var class=\"this_is_a_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_a_question</med-var>&nbsp;to the first,&nbsp;<med-var class=\"this_is_an_obligatory_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_an_obligatory_question</med-var>&nbsp;to the second</p><p>and&nbsp;<med-var class=\"this_is_another_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_another_question</med-var>&nbsp;to the final one. Congrats user!</p>",
                "svg": {
                    "name": "svg",
                    "begin": "",
                    "end": "</svg>",
                    "organs": []
                }
            }
        },
        "4": {
            "id": 4,
            "card": 4,
            "questions": [
                {
                    "questionID": 0,
                    "dragID": "0",
                    "type": "Text",
                    "variable": "this_is_a_text",
                    "questionLabel": "This is a text",
                    "required": false,
                    "default": null,
                    "min": null,
                    "max": null,
                    "loopvar": false,
                    "others": false,
                    "qchoices": 0,
                    "choices": []
                },
                {
                    "questionID": 1,
                    "dragID": "1",
                    "type": "Choice",
                    "variable": "now_with_choices",
                    "questionLabel": "Now with choices!",
                    "required": false,
                    "default": null,
                    "min": null,
                    "max": null,
                    "loopvar": false,
                    "others": true,
                    "qchoices": 2,
                    "choices": [
                        {
                            "choiceID": 0,
                            "dragID": "0",
                            "text": "Choice 1"
                        },
                        {
                            "choiceID": 1,
                            "dragID": "1",
                            "text": "Choice 2"
                        }
                    ]
                },
                {
                    "questionID": 2,
                    "dragID": "2",
                    "type": "Multiple Choice",
                    "variable": "multiple_choices",
                    "questionLabel": "Multiple Choices!",
                    "required": false,
                    "default": null,
                    "min": null,
                    "max": null,
                    "loopvar": false,
                    "others": false,
                    "qchoices": 3,
                    "choices": [
                        {
                            "choiceID": 0,
                            "dragID": "0",
                            "text": "Option 0"
                        },
                        {
                            "choiceID": 1,
                            "dragID": "1",
                            "text": "Option 1"
                        },
                        {
                            "choiceID": 2,
                            "dragID": "2",
                            "text": "Option 2"
                        }
                    ]
                }
            ],
            "qlength": 3,
            "outputs": [],
            "nodes": [],
            "qnodes": 0,
            "nodesUsedIDs": {},
            "selnode": null,
            "template": "<p><img class=\"qrcode\" width=\"200\" height=\"200\" src=\"https://andreispurim.github.io/Imagem1.png\"></p><p>User has answered&nbsp;<med-var class=\"this_is_a_text\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_a_text</med-var>&nbsp;in the this_is_a_text variable</p><p>and meanwhile, has chosen the answer&nbsp;<med-var class=\"now_with_choices\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">now_with_choices</med-var>&nbsp;from the radiogroup</p><p>Finally,&nbsp;<med-var class=\"multiple_choices\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">multiple_choices</med-var>&nbsp;from the multiple choices</p>",
            "svg": {
                "base": "",
                "parts": [],
                "used_variables": []
            },
            "formatted": {
                "questions": [
                    {
                        "isRequired": false,
                        "type": "text",
                        "name": "this_is_a_text",
                        "title": "This is a text",
                        "defaultAnswer": null
                    },
                    {
                        "isRequired": false,
                        "type": "radiogroup",
                        "name": "now_with_choices",
                        "title": "Now with choices!",
                        "choices": [
                            "Choice 1",
                            "Choice 2"
                        ],
                        "hasOther": true
                    },
                    {
                        "isRequired": false,
                        "type": "checkbox",
                        "name": "multiple_choices",
                        "title": "Multiple Choices!",
                        "choices": [
                            "Option 0",
                            "Option 1",
                            "Option 2"
                        ],
                        "hasOther": false
                    }
                ],
                "template": "<p><img class=\"qrcode\" width=\"200\" height=\"200\" src=\"https://andreispurim.github.io/Imagem1.png\"></p><p>User has answered&nbsp;<med-var class=\"this_is_a_text\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_a_text</med-var>&nbsp;in the this_is_a_text variable</p><p>and meanwhile, has chosen the answer&nbsp;<med-var class=\"now_with_choices\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">now_with_choices</med-var>&nbsp;from the radiogroup</p><p>Finally,&nbsp;<med-var class=\"multiple_choices\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">multiple_choices</med-var>&nbsp;from the multiple choices</p>",
                "svg": {
                    "name": "svg",
                    "begin": "",
                    "end": "</svg>",
                    "organs": []
                }
            }
        }
    }
  }
}