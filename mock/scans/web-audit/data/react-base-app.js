import { defineMockData } from 'vite-plugin-mock-dev-server';

export default defineMockData('web-audit--react-base-app', {
  "auditReportVersion": 2,
  "vulnerabilities": {
    "@adobe/css-tools": {
      "name": "@adobe/css-tools",
      "severity": "moderate",
      "isDirect": false,
      "via": [
        {
          "source": 1094900,
          "name": "@adobe/css-tools",
          "dependency": "@adobe/css-tools",
          "title": "@adobe/css-tools Regular Expression Denial of Service (ReDOS) while Parsing CSS",
          "url": "https://github.com/advisories/GHSA-hpx4-r86g-5jrg",
          "severity": "moderate",
          "cwe": [
            "CWE-20",
            "CWE-1333"
          ],
          "cvss": {
            "score": 5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:N/I:N/A:L"
          },
          "range": "<4.3.1"
        },
        {
          "source": 1095241,
          "name": "@adobe/css-tools",
          "dependency": "@adobe/css-tools",
          "title": "@adobe/css-tools Improper Input Validation and Inefficient Regular Expression Complexity",
          "url": "https://github.com/advisories/GHSA-prr3-c3m5-p7q2",
          "severity": "moderate",
          "cwe": [
            "CWE-20",
            "CWE-1333"
          ],
          "cvss": {
            "score": 5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:N/I:N/A:L"
          },
          "range": "<4.3.2"
        }
      ],
      "effects": [],
      "range": "<=4.3.1",
      "nodes": [
        "node_modules/@adobe/css-tools"
      ],
      "fixAvailable": true
    },
    "@babel/helpers": {
      "name": "@babel/helpers",
      "severity": "moderate",
      "isDirect": false,
      "via": [
        {
          "source": 1104001,
          "name": "@babel/helpers",
          "dependency": "@babel/helpers",
          "title": "Babel has inefficient RegExp complexity in generated code with .replace when transpiling named capturing groups",
          "url": "https://github.com/advisories/GHSA-968p-4wvh-cqc8",
          "severity": "moderate",
          "cwe": [
            "CWE-1333"
          ],
          "cvss": {
            "score": 6.2,
            "vectorString": "CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": "<7.26.10"
        }
      ],
      "effects": [],
      "range": "<7.26.10",
      "nodes": [
        "node_modules/@babel/helpers"
      ],
      "fixAvailable": true
    },
    "@babel/runtime": {
      "name": "@babel/runtime",
      "severity": "moderate",
      "isDirect": false,
      "via": [
        {
          "source": 1104000,
          "name": "@babel/runtime",
          "dependency": "@babel/runtime",
          "title": "Babel has inefficient RegExp complexity in generated code with .replace when transpiling named capturing groups",
          "url": "https://github.com/advisories/GHSA-968p-4wvh-cqc8",
          "severity": "moderate",
          "cwe": [
            "CWE-1333"
          ],
          "cvss": {
            "score": 6.2,
            "vectorString": "CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": "<7.26.10"
        }
      ],
      "effects": [],
      "range": "<7.26.10",
      "nodes": [
        "node_modules/@babel/runtime"
      ],
      "fixAvailable": true
    },
    "@babel/traverse": {
      "name": "@babel/traverse",
      "severity": "critical",
      "isDirect": false,
      "via": [
        {
          "source": 1096886,
          "name": "@babel/traverse",
          "dependency": "@babel/traverse",
          "title": "Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code",
          "url": "https://github.com/advisories/GHSA-67hx-6x53-jw92",
          "severity": "critical",
          "cwe": [
            "CWE-184",
            "CWE-697"
          ],
          "cvss": {
            "score": 9.4,
            "vectorString": "CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H"
          },
          "range": "<7.23.2"
        }
      ],
      "effects": [],
      "range": "<7.23.2",
      "nodes": [
        "node_modules/@babel/traverse"
      ],
      "fixAvailable": true
    },
    "@pmmmwh/react-refresh-webpack-plugin": {
      "name": "@pmmmwh/react-refresh-webpack-plugin",
      "severity": "moderate",
      "isDirect": true,
      "via": [
        "webpack-dev-server"
      ],
      "effects": [],
      "range": "0.3.1 - 0.5.11",
      "nodes": [
        "node_modules/@pmmmwh/react-refresh-webpack-plugin"
      ],
      "fixAvailable": true
    },
    "@svgr/plugin-svgo": {
      "name": "@svgr/plugin-svgo",
      "severity": "high",
      "isDirect": false,
      "via": [
        "svgo"
      ],
      "effects": [
        "@svgr/webpack"
      ],
      "range": "<=5.5.0",
      "nodes": [
        "node_modules/@svgr/plugin-svgo"
      ],
      "fixAvailable": {
        "name": "@svgr/webpack",
        "version": "8.1.0",
        "isSemVerMajor": true
      }
    },
    "@svgr/webpack": {
      "name": "@svgr/webpack",
      "severity": "high",
      "isDirect": true,
      "via": [
        "@svgr/plugin-svgo"
      ],
      "effects": [],
      "range": "4.0.0 - 5.5.0",
      "nodes": [
        "node_modules/@svgr/webpack"
      ],
      "fixAvailable": {
        "name": "@svgr/webpack",
        "version": "8.1.0",
        "isSemVerMajor": true
      }
    },
    "body-parser": {
      "name": "body-parser",
      "severity": "high",
      "isDirect": false,
      "via": [
        {
          "source": 1099520,
          "name": "body-parser",
          "dependency": "body-parser",
          "title": "body-parser vulnerable to denial of service when url encoding is enabled",
          "url": "https://github.com/advisories/GHSA-qwcr-r2fm-qrc7",
          "severity": "high",
          "cwe": [
            "CWE-405"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": "<1.20.3"
        }
      ],
      "effects": [
        "express"
      ],
      "range": "<1.20.3",
      "nodes": [
        "node_modules/body-parser"
      ],
      "fixAvailable": true
    },
    "brace-expansion": {
      "name": "brace-expansion",
      "severity": "low",
      "isDirect": false,
      "via": [
        {
          "source": 1105443,
          "name": "brace-expansion",
          "dependency": "brace-expansion",
          "title": "brace-expansion Regular Expression Denial of Service vulnerability",
          "url": "https://github.com/advisories/GHSA-v6h2-p8h4-qcjw",
          "severity": "low",
          "cwe": [
            "CWE-400"
          ],
          "cvss": {
            "score": 3.1,
            "vectorString": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:N/I:N/A:L"
          },
          "range": ">=1.0.0 <=1.1.11"
        },
        {
          "source": 1105444,
          "name": "brace-expansion",
          "dependency": "brace-expansion",
          "title": "brace-expansion Regular Expression Denial of Service vulnerability",
          "url": "https://github.com/advisories/GHSA-v6h2-p8h4-qcjw",
          "severity": "low",
          "cwe": [
            "CWE-400"
          ],
          "cvss": {
            "score": 3.1,
            "vectorString": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:N/I:N/A:L"
          },
          "range": ">=2.0.0 <=2.0.1"
        }
      ],
      "effects": [],
      "range": "1.0.0 - 1.1.11 || 2.0.0 - 2.0.1",
      "nodes": [
        "node_modules/brace-expansion",
        "node_modules/filelist/node_modules/brace-expansion"
      ],
      "fixAvailable": true
    },
    "braces": {
      "name": "braces",
      "severity": "high",
      "isDirect": false,
      "via": [
        {
          "source": 1098094,
          "name": "braces",
          "dependency": "braces",
          "title": "Uncontrolled resource consumption in braces",
          "url": "https://github.com/advisories/GHSA-grv7-fg5c-xmjg",
          "severity": "high",
          "cwe": [
            "CWE-400",
            "CWE-1050"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": "<3.0.3"
        }
      ],
      "effects": [],
      "range": "<3.0.3",
      "nodes": [
        "node_modules/braces"
      ],
      "fixAvailable": true
    },
    "compression": {
      "name": "compression",
      "severity": "low",
      "isDirect": false,
      "via": [
        "on-headers"
      ],
      "effects": [],
      "range": "1.0.3 - 1.8.0",
      "nodes": [
        "node_modules/compression"
      ],
      "fixAvailable": true
    },
    "cookie": {
      "name": "cookie",
      "severity": "low",
      "isDirect": false,
      "via": [
        {
          "source": 1103907,
          "name": "cookie",
          "dependency": "cookie",
          "title": "cookie accepts cookie name, path, and domain with out of bounds characters",
          "url": "https://github.com/advisories/GHSA-pxg6-pf52-xh8x",
          "severity": "low",
          "cwe": [
            "CWE-74"
          ],
          "cvss": {
            "score": 0,
            "vectorString": null
          },
          "range": "<0.7.0"
        }
      ],
      "effects": [
        "express"
      ],
      "range": "<0.7.0",
      "nodes": [
        "node_modules/cookie"
      ],
      "fixAvailable": true
    },
    "cross-spawn": {
      "name": "cross-spawn",
      "severity": "high",
      "isDirect": false,
      "via": [
        {
          "source": 1104664,
          "name": "cross-spawn",
          "dependency": "cross-spawn",
          "title": "Regular Expression Denial of Service (ReDoS) in cross-spawn",
          "url": "https://github.com/advisories/GHSA-3xgq-45jj-v275",
          "severity": "high",
          "cwe": [
            "CWE-1333"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": ">=7.0.0 <7.0.5"
        }
      ],
      "effects": [],
      "range": "7.0.0 - 7.0.4",
      "nodes": [
        "node_modules/cross-spawn"
      ],
      "fixAvailable": true
    },
    "css-select": {
      "name": "css-select",
      "severity": "high",
      "isDirect": false,
      "via": [
        "nth-check"
      ],
      "effects": [
        "svgo"
      ],
      "range": "<=3.1.0",
      "nodes": [
        "node_modules/svgo/node_modules/css-select"
      ],
      "fixAvailable": {
        "name": "@svgr/webpack",
        "version": "8.1.0",
        "isSemVerMajor": true
      }
    },
    "ejs": {
      "name": "ejs",
      "severity": "moderate",
      "isDirect": false,
      "via": [
        {
          "source": 1098366,
          "name": "ejs",
          "dependency": "ejs",
          "title": "ejs lacks certain pollution protection",
          "url": "https://github.com/advisories/GHSA-ghr5-ch3p-vcr6",
          "severity": "moderate",
          "cwe": [
            "CWE-693",
            "CWE-1321"
          ],
          "cvss": {
            "score": 4,
            "vectorString": "CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L"
          },
          "range": "<3.1.10"
        }
      ],
      "effects": [],
      "range": "<3.1.10",
      "nodes": [
        "node_modules/ejs"
      ],
      "fixAvailable": true
    },
    "express": {
      "name": "express",
      "severity": "high",
      "isDirect": false,
      "via": [
        {
          "source": 1096820,
          "name": "express",
          "dependency": "express",
          "title": "Express.js Open Redirect in malformed URLs",
          "url": "https://github.com/advisories/GHSA-rv95-896h-c2vc",
          "severity": "moderate",
          "cwe": [
            "CWE-601",
            "CWE-1286"
          ],
          "cvss": {
            "score": 6.1,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N"
          },
          "range": "<4.19.2"
        },
        {
          "source": 1100530,
          "name": "express",
          "dependency": "express",
          "title": "express vulnerable to XSS via response.redirect()",
          "url": "https://github.com/advisories/GHSA-qw6h-vgh9-j6wx",
          "severity": "low",
          "cwe": [
            "CWE-79"
          ],
          "cvss": {
            "score": 5,
            "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:L/A:L"
          },
          "range": "<4.20.0"
        },
        "body-parser",
        "cookie",
        "path-to-regexp",
        "send",
        "serve-static"
      ],
      "effects": [],
      "range": "<=4.21.0 || 5.0.0-alpha.1 - 5.0.0",
      "nodes": [
        "node_modules/express"
      ],
      "fixAvailable": true
    },
    "follow-redirects": {
      "name": "follow-redirects",
      "severity": "moderate",
      "isDirect": false,
      "via": [
        {
          "source": 1096353,
          "name": "follow-redirects",
          "dependency": "follow-redirects",
          "title": "Follow Redirects improperly handles URLs in the url.parse() function",
          "url": "https://github.com/advisories/GHSA-jchw-25xp-jwwc",
          "severity": "moderate",
          "cwe": [
            "CWE-20",
            "CWE-601"
          ],
          "cvss": {
            "score": 6.1,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N"
          },
          "range": "<1.15.4"
        },
        {
          "source": 1096856,
          "name": "follow-redirects",
          "dependency": "follow-redirects",
          "title": "follow-redirects' Proxy-Authorization header kept across hosts",
          "url": "https://github.com/advisories/GHSA-cxjh-pqwp-8mfp",
          "severity": "moderate",
          "cwe": [
            "CWE-200"
          ],
          "cvss": {
            "score": 6.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N"
          },
          "range": "<=1.15.5"
        }
      ],
      "effects": [],
      "range": "<=1.15.5",
      "nodes": [
        "node_modules/follow-redirects"
      ],
      "fixAvailable": true
    },
    "form-data": {
      "name": "form-data",
      "severity": "critical",
      "isDirect": false,
      "via": [
        {
          "source": 1106508,
          "name": "form-data",
          "dependency": "form-data",
          "title": "form-data uses unsafe random function in form-data for choosing boundary",
          "url": "https://github.com/advisories/GHSA-fjxv-7rqg-78g4",
          "severity": "critical",
          "cwe": [
            "CWE-330"
          ],
          "cvss": {
            "score": 0,
            "vectorString": null
          },
          "range": ">=3.0.0 <3.0.4"
        }
      ],
      "effects": [],
      "range": "3.0.0 - 3.0.3",
      "nodes": [
        "node_modules/form-data"
      ],
      "fixAvailable": true
    },
    "http-proxy-middleware": {
      "name": "http-proxy-middleware",
      "severity": "high",
      "isDirect": false,
      "via": [
        {
          "source": 1100223,
          "name": "http-proxy-middleware",
          "dependency": "http-proxy-middleware",
          "title": "Denial of service in http-proxy-middleware",
          "url": "https://github.com/advisories/GHSA-c7qv-q95q-8v27",
          "severity": "high",
          "cwe": [
            "CWE-400"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": "<2.0.7"
        },
        {
          "source": 1104105,
          "name": "http-proxy-middleware",
          "dependency": "http-proxy-middleware",
          "title": "http-proxy-middleware allows fixRequestBody to proceed even if bodyParser has failed",
          "url": "https://github.com/advisories/GHSA-9gqv-wp59-fq42",
          "severity": "moderate",
          "cwe": [
            "CWE-754"
          ],
          "cvss": {
            "score": 4,
            "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:C/C:N/I:L/A:N"
          },
          "range": ">=1.3.0 <2.0.9"
        },
        {
          "source": 1104106,
          "name": "http-proxy-middleware",
          "dependency": "http-proxy-middleware",
          "title": "http-proxy-middleware can call writeBody twice because \"else if\" is not used",
          "url": "https://github.com/advisories/GHSA-4www-5p9h-95mh",
          "severity": "moderate",
          "cwe": [
            "CWE-670"
          ],
          "cvss": {
            "score": 4,
            "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:C/C:N/I:N/A:L"
          },
          "range": ">=1.3.0 <2.0.8"
        }
      ],
      "effects": [],
      "range": "<=2.0.8",
      "nodes": [
        "node_modules/http-proxy-middleware"
      ],
      "fixAvailable": true
    },
    "micromatch": {
      "name": "micromatch",
      "severity": "moderate",
      "isDirect": false,
      "via": [
        {
          "source": 1098681,
          "name": "micromatch",
          "dependency": "micromatch",
          "title": "Regular Expression Denial of Service (ReDoS) in micromatch",
          "url": "https://github.com/advisories/GHSA-952p-6rrq-rcjv",
          "severity": "moderate",
          "cwe": [
            "CWE-1333"
          ],
          "cvss": {
            "score": 5.3,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L"
          },
          "range": "<4.0.8"
        }
      ],
      "effects": [],
      "range": "<4.0.8",
      "nodes": [
        "node_modules/micromatch"
      ],
      "fixAvailable": true
    },
    "nanoid": {
      "name": "nanoid",
      "severity": "moderate",
      "isDirect": false,
      "via": [
        {
          "source": 1101163,
          "name": "nanoid",
          "dependency": "nanoid",
          "title": "Predictable results in nanoid generation when given non-integer values",
          "url": "https://github.com/advisories/GHSA-mwcw-c2x4-8c55",
          "severity": "moderate",
          "cwe": [
            "CWE-835"
          ],
          "cvss": {
            "score": 4.3,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N"
          },
          "range": "<3.3.8"
        }
      ],
      "effects": [],
      "range": "<3.3.8",
      "nodes": [
        "node_modules/nanoid"
      ],
      "fixAvailable": true
    },
    "nth-check": {
      "name": "nth-check",
      "severity": "high",
      "isDirect": false,
      "via": [
        {
          "source": 1095141,
          "name": "nth-check",
          "dependency": "nth-check",
          "title": "Inefficient Regular Expression Complexity in nth-check",
          "url": "https://github.com/advisories/GHSA-rp65-9cf3-cjxr",
          "severity": "high",
          "cwe": [
            "CWE-1333"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": "<2.0.1"
        }
      ],
      "effects": [
        "css-select"
      ],
      "range": "<2.0.1",
      "nodes": [
        "node_modules/svgo/node_modules/nth-check"
      ],
      "fixAvailable": {
        "name": "@svgr/webpack",
        "version": "8.1.0",
        "isSemVerMajor": true
      }
    },
    "on-headers": {
      "name": "on-headers",
      "severity": "low",
      "isDirect": false,
      "via": [
        {
          "source": 1106812,
          "name": "on-headers",
          "dependency": "on-headers",
          "title": "on-headers is vulnerable to http response header manipulation",
          "url": "https://github.com/advisories/GHSA-76c9-3jph-rj3q",
          "severity": "low",
          "cwe": [
            "CWE-241"
          ],
          "cvss": {
            "score": 3.4,
            "vectorString": "CVSS:3.1/AV:L/AC:L/PR:H/UI:N/S:U/C:L/I:L/A:N"
          },
          "range": "<1.1.0"
        }
      ],
      "effects": [
        "compression"
      ],
      "range": "<1.1.0",
      "nodes": [
        "node_modules/on-headers"
      ],
      "fixAvailable": true
    },
    "path-to-regexp": {
      "name": "path-to-regexp",
      "severity": "high",
      "isDirect": false,
      "via": [
        {
          "source": 1101850,
          "name": "path-to-regexp",
          "dependency": "path-to-regexp",
          "title": "path-to-regexp outputs backtracking regular expressions",
          "url": "https://github.com/advisories/GHSA-9wv6-86v2-598j",
          "severity": "high",
          "cwe": [
            "CWE-1333"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": "<0.1.10"
        },
        {
          "source": 1105199,
          "name": "path-to-regexp",
          "dependency": "path-to-regexp",
          "title": "path-to-regexp contains a ReDoS",
          "url": "https://github.com/advisories/GHSA-rhx6-c78j-4q9w",
          "severity": "high",
          "cwe": [
            "CWE-1333"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": "<0.1.12"
        }
      ],
      "effects": [
        "express"
      ],
      "range": "<=0.1.11",
      "nodes": [
        "node_modules/path-to-regexp"
      ],
      "fixAvailable": true
    },
    "postcss": {
      "name": "postcss",
      "severity": "moderate",
      "isDirect": true,
      "via": [
        {
          "source": 1094544,
          "name": "postcss",
          "dependency": "postcss",
          "title": "PostCSS line return parsing error",
          "url": "https://github.com/advisories/GHSA-7fh5-64p2-3v2j",
          "severity": "moderate",
          "cwe": [
            "CWE-74",
            "CWE-144"
          ],
          "cvss": {
            "score": 5.3,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N"
          },
          "range": "<8.4.31"
        }
      ],
      "effects": [
        "resolve-url-loader"
      ],
      "range": "<8.4.31",
      "nodes": [
        "node_modules/postcss",
        "node_modules/resolve-url-loader/node_modules/postcss"
      ],
      "fixAvailable": {
        "name": "resolve-url-loader",
        "version": "5.0.0",
        "isSemVerMajor": true
      }
    },
    "resolve-url-loader": {
      "name": "resolve-url-loader",
      "severity": "moderate",
      "isDirect": true,
      "via": [
        "postcss"
      ],
      "effects": [],
      "range": "0.0.1-experiment-postcss || 3.0.0-alpha.1 - 4.0.0",
      "nodes": [
        "node_modules/resolve-url-loader"
      ],
      "fixAvailable": {
        "name": "resolve-url-loader",
        "version": "5.0.0",
        "isSemVerMajor": true
      }
    },
    "rollup": {
      "name": "rollup",
      "severity": "high",
      "isDirect": false,
      "via": [
        {
          "source": 1099757,
          "name": "rollup",
          "dependency": "rollup",
          "title": "DOM Clobbering Gadget found in rollup bundled scripts that leads to XSS",
          "url": "https://github.com/advisories/GHSA-gcx4-mw62-g8wm",
          "severity": "high",
          "cwe": [
            "CWE-79"
          ],
          "cvss": {
            "score": 6.4,
            "vectorString": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:L/A:H"
          },
          "range": "<2.79.2"
        }
      ],
      "effects": [],
      "range": "<2.79.2",
      "nodes": [
        "node_modules/rollup"
      ],
      "fixAvailable": true
    },
    "semver": {
      "name": "semver",
      "severity": "high",
      "isDirect": true,
      "via": [
        {
          "source": 1101088,
          "name": "semver",
          "dependency": "semver",
          "title": "semver vulnerable to Regular Expression Denial of Service",
          "url": "https://github.com/advisories/GHSA-c2qf-rxjj-qqgw",
          "severity": "high",
          "cwe": [
            "CWE-1333"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": ">=7.0.0 <7.5.2"
        },
        {
          "source": 1101090,
          "name": "semver",
          "dependency": "semver",
          "title": "semver vulnerable to Regular Expression Denial of Service",
          "url": "https://github.com/advisories/GHSA-c2qf-rxjj-qqgw",
          "severity": "high",
          "cwe": [
            "CWE-1333"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": ">=6.0.0 <6.3.1"
        }
      ],
      "effects": [],
      "range": "6.0.0 - 6.3.0 || 7.0.0 - 7.5.1",
      "nodes": [
        "node_modules/@babel/core/node_modules/semver",
        "node_modules/@babel/eslint-parser/node_modules/semver",
        "node_modules/@babel/helper-compilation-targets/node_modules/semver",
        "node_modules/@babel/helper-define-polyfill-provider/node_modules/semver",
        "node_modules/@babel/plugin-transform-runtime/node_modules/semver",
        "node_modules/@babel/preset-env/node_modules/semver",
        "node_modules/babel-plugin-polyfill-corejs2/node_modules/semver",
        "node_modules/eslint-plugin-import/node_modules/semver",
        "node_modules/eslint-plugin-jsx-a11y/node_modules/semver",
        "node_modules/eslint-plugin-react/node_modules/semver",
        "node_modules/istanbul-lib-instrument/node_modules/semver",
        "node_modules/make-dir/node_modules/semver",
        "node_modules/semver"
      ],
      "fixAvailable": true
    },
    "send": {
      "name": "send",
      "severity": "low",
      "isDirect": false,
      "via": [
        {
          "source": 1100526,
          "name": "send",
          "dependency": "send",
          "title": "send vulnerable to template injection that can lead to XSS",
          "url": "https://github.com/advisories/GHSA-m6fv-jmcg-4jfg",
          "severity": "low",
          "cwe": [
            "CWE-79"
          ],
          "cvss": {
            "score": 5,
            "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:L/A:L"
          },
          "range": "<0.19.0"
        }
      ],
      "effects": [
        "express",
        "serve-static"
      ],
      "range": "<0.19.0",
      "nodes": [
        "node_modules/send"
      ],
      "fixAvailable": true
    },
    "serialize-javascript": {
      "name": "serialize-javascript",
      "severity": "moderate",
      "isDirect": false,
      "via": [
        {
          "source": 1105261,
          "name": "serialize-javascript",
          "dependency": "serialize-javascript",
          "title": "Cross-site Scripting (XSS) in serialize-javascript",
          "url": "https://github.com/advisories/GHSA-76p7-773f-r4q5",
          "severity": "moderate",
          "cwe": [
            "CWE-79"
          ],
          "cvss": {
            "score": 5.4,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:N"
          },
          "range": ">=6.0.0 <6.0.2"
        }
      ],
      "effects": [],
      "range": "6.0.0 - 6.0.1",
      "nodes": [
        "node_modules/serialize-javascript"
      ],
      "fixAvailable": true
    },
    "serve-static": {
      "name": "serve-static",
      "severity": "low",
      "isDirect": false,
      "via": [
        {
          "source": 1100528,
          "name": "serve-static",
          "dependency": "serve-static",
          "title": "serve-static vulnerable to template injection that can lead to XSS",
          "url": "https://github.com/advisories/GHSA-cm22-4g7w-348p",
          "severity": "low",
          "cwe": [
            "CWE-79"
          ],
          "cvss": {
            "score": 5,
            "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:L/A:L"
          },
          "range": "<1.16.0"
        },
        "send"
      ],
      "effects": [],
      "range": "<=1.16.0",
      "nodes": [
        "node_modules/serve-static"
      ],
      "fixAvailable": true
    },
    "svgo": {
      "name": "svgo",
      "severity": "high",
      "isDirect": false,
      "via": [
        "css-select"
      ],
      "effects": [
        "@svgr/plugin-svgo"
      ],
      "range": "1.0.0 - 1.3.2",
      "nodes": [
        "node_modules/svgo"
      ],
      "fixAvailable": {
        "name": "@svgr/webpack",
        "version": "8.1.0",
        "isSemVerMajor": true
      }
    },
    "tough-cookie": {
      "name": "tough-cookie",
      "severity": "moderate",
      "isDirect": false,
      "via": [
        {
          "source": 1097682,
          "name": "tough-cookie",
          "dependency": "tough-cookie",
          "title": "tough-cookie Prototype Pollution vulnerability",
          "url": "https://github.com/advisories/GHSA-72xf-g2v4-qvf3",
          "severity": "moderate",
          "cwe": [
            "CWE-1321"
          ],
          "cvss": {
            "score": 6.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N"
          },
          "range": "<4.1.3"
        }
      ],
      "effects": [],
      "range": "<4.1.3",
      "nodes": [
        "node_modules/tough-cookie"
      ],
      "fixAvailable": true
    },
    "webpack": {
      "name": "webpack",
      "severity": "moderate",
      "isDirect": true,
      "via": [
        {
          "source": 1099351,
          "name": "webpack",
          "dependency": "webpack",
          "title": "Webpack's AutoPublicPathRuntimeModule has a DOM Clobbering Gadget that leads to XSS",
          "url": "https://github.com/advisories/GHSA-4vvj-4cpr-p986",
          "severity": "moderate",
          "cwe": [
            "CWE-79"
          ],
          "cvss": {
            "score": 6.4,
            "vectorString": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:L/A:H"
          },
          "range": ">=5.0.0-alpha.0 <5.94.0"
        }
      ],
      "effects": [],
      "range": "5.0.0-alpha.0 - 5.93.0",
      "nodes": [
        "node_modules/webpack"
      ],
      "fixAvailable": true
    },
    "webpack-dev-middleware": {
      "name": "webpack-dev-middleware",
      "severity": "high",
      "isDirect": false,
      "via": [
        {
          "source": 1096729,
          "name": "webpack-dev-middleware",
          "dependency": "webpack-dev-middleware",
          "title": "Path traversal in webpack-dev-middleware",
          "url": "https://github.com/advisories/GHSA-wr3j-pwj9-hqq6",
          "severity": "high",
          "cwe": [
            "CWE-22"
          ],
          "cvss": {
            "score": 7.4,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:N/A:N"
          },
          "range": "<=5.3.3"
        }
      ],
      "effects": [],
      "range": "<=5.3.3",
      "nodes": [
        "node_modules/webpack-dev-middleware"
      ],
      "fixAvailable": true
    },
    "webpack-dev-server": {
      "name": "webpack-dev-server",
      "severity": "moderate",
      "isDirect": true,
      "via": [
        {
          "source": 1105256,
          "name": "webpack-dev-server",
          "dependency": "webpack-dev-server",
          "title": "webpack-dev-server users' source code may be stolen when they access a malicious web site with non-Chromium based browser",
          "url": "https://github.com/advisories/GHSA-9jgg-88mc-972h",
          "severity": "moderate",
          "cwe": [
            "CWE-346"
          ],
          "cvss": {
            "score": 6.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N"
          },
          "range": "<=5.2.0"
        },
        {
          "source": 1105257,
          "name": "webpack-dev-server",
          "dependency": "webpack-dev-server",
          "title": "webpack-dev-server users' source code may be stolen when they access a malicious web site",
          "url": "https://github.com/advisories/GHSA-4v9v-hfq4-rm2v",
          "severity": "moderate",
          "cwe": [
            "CWE-749"
          ],
          "cvss": {
            "score": 5.3,
            "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:N/A:N"
          },
          "range": "<=5.2.0"
        }
      ],
      "effects": [
        "@pmmmwh/react-refresh-webpack-plugin"
      ],
      "range": "<=5.2.0",
      "nodes": [
        "node_modules/webpack-dev-server"
      ],
      "fixAvailable": {
        "name": "webpack-dev-server",
        "version": "5.2.2",
        "isSemVerMajor": true
      }
    },
    "word-wrap": {
      "name": "word-wrap",
      "severity": "moderate",
      "isDirect": false,
      "via": [
        {
          "source": 1102444,
          "name": "word-wrap",
          "dependency": "word-wrap",
          "title": "word-wrap vulnerable to Regular Expression Denial of Service",
          "url": "https://github.com/advisories/GHSA-j8xg-fqg3-53r7",
          "severity": "moderate",
          "cwe": [
            "CWE-1333"
          ],
          "cvss": {
            "score": 5.3,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L"
          },
          "range": "<1.2.4"
        }
      ],
      "effects": [],
      "range": "<1.2.4",
      "nodes": [
        "node_modules/word-wrap"
      ],
      "fixAvailable": true
    },
    "ws": {
      "name": "ws",
      "severity": "high",
      "isDirect": false,
      "via": [
        {
          "source": 1098392,
          "name": "ws",
          "dependency": "ws",
          "title": "ws affected by a DoS when handling a request with many HTTP headers",
          "url": "https://github.com/advisories/GHSA-3h5v-q93c-6h6q",
          "severity": "high",
          "cwe": [
            "CWE-476"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": ">=8.0.0 <8.17.1"
        },
        {
          "source": 1098393,
          "name": "ws",
          "dependency": "ws",
          "title": "ws affected by a DoS when handling a request with many HTTP headers",
          "url": "https://github.com/advisories/GHSA-3h5v-q93c-6h6q",
          "severity": "high",
          "cwe": [
            "CWE-476"
          ],
          "cvss": {
            "score": 7.5,
            "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
          },
          "range": ">=7.0.0 <7.5.10"
        }
      ],
      "effects": [],
      "range": "7.0.0 - 7.5.9 || 8.0.0 - 8.17.0",
      "nodes": [
        "node_modules/webpack-dev-server/node_modules/ws",
        "node_modules/ws"
      ],
      "fixAvailable": true
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 6,
      "moderate": 15,
      "high": 15,
      "critical": 2,
      "total": 38
    },
    "dependencies": {
      "prod": 1455,
      "dev": 0,
      "optional": 2,
      "peer": 7,
      "peerOptional": 0,
      "total": 1463
    }
  }
});
