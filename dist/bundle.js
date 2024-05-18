/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/shell/src/models/directory_model.js":
/*!******************************************************!*\
  !*** ./packages/shell/src/models/directory_model.js ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Directory: () => (/* binding */ Directory),\n/* harmony export */   rootDirectory: () => (/* binding */ rootDirectory)\n/* harmony export */ });\n/* harmony import */ var _utils_date_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date_service */ \"./packages/shell/src/utils/date_service.js\");\n/* harmony import */ var _src_user_user_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/user/user_api */ \"./src/user/user_api.js\");\n\r\n\r\n\r\n\r\n\r\n// @TODO: complete dis\r\n\r\nclass Directory {\r\n  constructor({\r\n    id,\r\n    name,\r\n    path,\r\n    directories = [],\r\n    files = [],\r\n    dateCreated,\r\n    dateModified,\r\n    type = \"File Folder\",\r\n    size = 0,\r\n  }) {\r\n    //TODO: Test whether Id is better if private\r\n    this._id = id; // ID of the Directory / Abs. Path with dir name\r\n    this.name = name; // Name of the directory\r\n    this._path = path; // Parent Path of the directory\r\n    this.directories = directories; // Array to store directories IDs\r\n    this.files = files; // Array to store files refs\r\n    this.dateCreated = dateCreated; // Date when the directory was created\r\n    this.dateModified = dateModified; // Date when the directory was last modified\r\n    this.size = size;\r\n    this.type = type;\r\n  }\r\n  addDirectory(directory) {\r\n    this.directories.push(directory);\r\n    this.dateModified = (0,_utils_date_service__WEBPACK_IMPORTED_MODULE_0__.getCurrentTime)()\r\n  }\r\n  get id() {\r\n    return this._id;\r\n  }\r\n  get path() {\r\n    return this._path;\r\n  }\r\n  \r\n  set path(newPath) {\r\n    this._path = newPath;\r\n    // Optionally update the ID if needed\r\n    this._id = this._path + \"/\" + this._name;\r\n  }\r\n  removeDirectory(directory) {\r\n    // TODO: Implement all Cases.\r\n    this.directories.pop(directory);\r\n    this.dateModified = (0,_utils_date_service__WEBPACK_IMPORTED_MODULE_0__.getCurrentTime)()\r\n  }\r\n  addFile(files) {\r\n    this.files.push(files);\r\n    this.dateModified = (0,_utils_date_service__WEBPACK_IMPORTED_MODULE_0__.getCurrentTime)()\r\n  }\r\n  removeFile(files) {\r\n    // TODO: Implement all Cases.\r\n    this.files.pop(files);\r\n    this.dateModified = (0,_utils_date_service__WEBPACK_IMPORTED_MODULE_0__.getCurrentTime)()\r\n  }\r\n  getNumOfItems() {\r\n    return this.directories.length + this.files.length;\r\n  }\r\n  listItems(address) {\r\n    const directoryContents = [\r\n      {\r\n        mode: \"______\",\r\n        lastWriteTime: \"_____________\",\r\n        length: \"______\",\r\n        name: \"_________\",\r\n      },\r\n    ];\r\n    let div = document.createElement(\"div\");\r\n    const table = document.createElement(\"table\");\r\n    div.innerHTML =\r\n      '<br><br><span style=\"font-weigth: 600 ; color: #c3e88d;\" >' +\r\n      address +\r\n      \"</span><br><br>\";\r\n    table.innerHTML =\r\n      '<table id=\"directoryTable\"><thead><tr><th>Mode</th><th>LastWriteTime</th><th>Length</th><th>Name</th></tr></thead></table>';\r\n    const directoryBody = document.createElement(\"tbody\");\r\n    // Loop through each item in the directory contents\r\n    const rw_body = directoryBody.insertRow();\r\n    rw_body.insertCell().textContent = directoryContents[0].mode;\r\n    rw_body.insertCell().textContent = directoryContents[0].lastWriteTime;\r\n    rw_body.insertCell().textContent = directoryContents[0].length;\r\n    rw_body.insertCell().textContent = directoryContents[0].name;\r\n    table.appendChild(rw_body);\r\n    this.directories.forEach((dir) => {\r\n      const row = directoryBody.insertRow();\r\n      row.insertCell().textContent = \"d_____\";\r\n      row.insertCell().textContent = (0,_utils_date_service__WEBPACK_IMPORTED_MODULE_0__.getRedeableDate)(dir.dateModified);\r\n      row.insertCell().textContent = dir.size;\r\n      row.insertCell().textContent = dir.name;\r\n      table.appendChild(row);\r\n    });\r\n    this.files.forEach((file) => {\r\n      const row = directoryBody.insertRow();\r\n      row.insertCell().textContent = file.type;\r\n      row.insertCell().textContent = (0,_utils_date_service__WEBPACK_IMPORTED_MODULE_0__.getRedeableDate)(file.dateModified);\r\n      row.insertCell().textContent = file.size;\r\n      row.insertCell().textContent = file.name;\r\n      table.appendChild(row);\r\n    });\r\n    div.appendChild(table);\r\n    return div;\r\n    // Call the function to display directory contents\r\n\r\n    throw Error(\"UnImplemented Error | Directory.listItems()\");\r\n  }\r\n}\r\n\r\n// export const _ROOT_ = new Directory({\r\n//   id: mockData.id,\r\n//   path: \"\",\r\n//   name: mockData.name,\r\n//   directories: [],\r\n//   files: [],\r\n//   dateCreated: getCurrentTime(),\r\n//   dateModified: getCurrentTime(),\r\n// });\r\n\r\nconst user = await (0,_src_user_user_api__WEBPACK_IMPORTED_MODULE_1__.getUsername)()\r\nconst rootDirectory = new Directory({\r\n  id: user,\r\n  name: user,\r\n  path: \"\",\r\n  directories: [],\r\n  files: [],\r\n  dateCreated: (0,_utils_date_service__WEBPACK_IMPORTED_MODULE_0__.getCurrentTime)(),\r\n  dateModified: (0,_utils_date_service__WEBPACK_IMPORTED_MODULE_0__.getCurrentTime)(),\r\n  size: 0,\r\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://astroos/./packages/shell/src/models/directory_model.js?");

/***/ }),

/***/ "./packages/shell/src/repo/directories_api.js":
/*!****************************************************!*\
  !*** ./packages/shell/src/repo/directories_api.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDirectoryDb: () => (/* binding */ createDirectoryDb),\n/* harmony export */   createIfRootDir: () => (/* binding */ createIfRootDir),\n/* harmony export */   removeDirectoryDb: () => (/* binding */ removeDirectoryDb),\n/* harmony export */   updateDirectoryDb: () => (/* binding */ updateDirectoryDb)\n/* harmony export */ });\n/* harmony import */ var _models_directory_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/directory_model */ \"./packages/shell/src/models/directory_model.js\");\n/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/response */ \"./packages/shell/src/utils/response.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_models_directory_model__WEBPACK_IMPORTED_MODULE_0__]);\n_models_directory_model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\nfunction createDirectoryDb(directory, pid) {\r\n  return new Promise((resolve, reject) => {\r\n    const request = indexedDB.open(\"astroOS\");\r\n\r\n    request.onsuccess = function (event) {\r\n      const db = event.target.result;\r\n\r\n      const transaction = db.transaction([\"directories\"], \"readwrite\");\r\n      const objectStore = transaction.objectStore(\"directories\");\r\n      const requestAdd = objectStore.add({\r\n        id: directory.id,\r\n        path: directory.path,\r\n        name: directory.name,\r\n        directories: directory.directories,\r\n        files: directory.files,\r\n        size: directory.size,\r\n        dateCreated: directory.dateCreated,\r\n        dateModified: directory.dateModified,\r\n      });\r\n\r\n      // @might-break\r\n      if (pid != \"\") {\r\n        // console.log(\"@pid\", pid);\r\n        const requestGet = objectStore.get(pid);\r\n        requestGet.onsuccess = function (event) {\r\n          const existingFile = event.target.result;\r\n          //console.log(\"@updateDirectoryDb() - existingFile: \", existingFile);\r\n          if (existingFile) {\r\n            ///////\r\n            let records = existingFile.directories;\r\n            records.push(directory);\r\n           \r\n\r\n            existingFile.directories = records;\r\n            /////////\r\n            existingFile.dateModified = new Date().toISOString();\r\n\r\n            const putRequest = objectStore.put(existingFile);\r\n\r\n            console.log(\"@updateDirectoryDb() - putFile: \", existingFile);\r\n            putRequest.onsuccess = function (event) {\r\n              console.log(\"Parent Data updated in IndexedDB\");\r\n            };\r\n            putRequest.onerror = function (event) {\r\n              reject(\"Put request error:\", event.target.error);\r\n            };\r\n          } else {\r\n            reject(\"Document not found:\", directory.path);\r\n          }\r\n          resolve(\"Success\");\r\n        };\r\n      }\r\n\r\n      \r\n      requestAdd.onsuccess = function (event) {\r\n        console.log(\"Directory data added to IndexedDB\");\r\n      };\r\n      transaction.oncomplete = function (event) {\r\n        console.log(\"Transaction completed: Directory data saved to IndexedDB\");\r\n      };\r\n      transaction.onerror = function (event) {\r\n        console.error(\"Transaction error:\", event.target.error);\r\n      };\r\n    };\r\n\r\n    request.onerror = function (event) {\r\n      reject(\"Database error:\", event.target.error);\r\n    };\r\n  });\r\n}\r\nasync function createIfRootDir() {\r\n  createDirectoryDb(_models_directory_model__WEBPACK_IMPORTED_MODULE_0__.rootDirectory, \"\")\r\n    .then((res) => {\r\n      console.log(\"Created The Root Direcotry\");\r\n    })\r\n    .catch((error) => {\r\n      console.error(error);\r\n    });\r\n}\r\nfunction updateDirectoryDb(directory, pid) {\r\n  return new Promise((resolve, reject) => {\r\n    const request = indexedDB.open(\"astroOS\");\r\n\r\n    request.onsuccess = function (event) {\r\n      const db = event.target.result;\r\n\r\n      const transaction = db.transaction([\"directories\"], \"readwrite\");\r\n      const objectStore = transaction.objectStore(\"directories\");\r\n      const requestPut = objectStore.put({\r\n        id: directory.id,\r\n        path: directory.path,\r\n        name: directory.name,\r\n        directories: directory.directories,\r\n        files: directory.files,\r\n        size: directory.size,\r\n        dateCreated: directory.dateCreated,\r\n        dateModified: directory.dateModified,\r\n      });\r\n  \r\n      // @TODO: Handle Hazards such as updating dir name or path --- Parent doesn't change\r\n      requestPut.onsuccess = function (event) {\r\n        console.log(\"Directory data updated IndexedDB\");\r\n        resolve(\"Success\")\r\n      };\r\n      transaction.oncomplete = function (event) {\r\n        console.log(\"Transaction completed: Directory data updated in IndexedDB\");\r\n      };\r\n      transaction.onerror = function (event) {\r\n        console.error(\"Transaction error:\", event.target.error);\r\n        \r\n      };\r\n    };\r\n    request.onerror = function (event) {\r\n      reject(\"Database error:\", event.target.error);\r\n    };\r\n  });\r\n}\r\nfunction removeDirectoryDb(directory) {\r\n  return new Promise((resolve, reject) => {\r\n    const request = indexedDB.open(\"astroOS\", 1);\r\n    \r\n    request.onsuccess = function(event){\r\n      const db = event.target.result;\r\n\r\n      const transaction = db.transaction([\"directories\"], \"readwrite\");\r\n      const objectStore = transaction.objectStore(\"directories\");\r\n      const requestDelete = objectStore.delete(directory.id);\r\n  \r\n      // @TODO: Handle Hazards such as updating dir name or path --- Parent doesn't change\r\n      requestDelete.onsuccess = function (event) {\r\n        console.log(\"Directory removed succesfully from IndexedDB\");\r\n        resolve(\"Success\")\r\n      };\r\n      transaction.oncomplete = function (event) {\r\n        console.log(\"Transaction completed: Directory data updated in IndexedDB\");\r\n      };\r\n      transaction.onerror = function (event) {\r\n        console.error(\"Transaction error:\", event.target.error);\r\n        reject(\"Transaction error:\", event.target.error);\r\n        \r\n      };\r\n\r\n    }\r\n    request.onerror = function(event){\r\n      reject(\"Database error\", event.target.error)\r\n    }\r\n\r\n  })\r\n  \r\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://astroos/./packages/shell/src/repo/directories_api.js?");

/***/ }),

/***/ "./packages/shell/src/utils/date_service.js":
/*!**************************************************!*\
  !*** ./packages/shell/src/utils/date_service.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentTime: () => (/* binding */ getCurrentTime),\n/* harmony export */   getRedeableDate: () => (/* binding */ getRedeableDate)\n/* harmony export */ });\nfunction getCurrentTime() {\r\n    return new Date().toISOString()\r\n}\r\nfunction getRedeableDate(isoString) {\r\n    const date = new Date(isoString)\r\n\r\n    const readableDate = date.toLocaleDateString('en-US',{\r\n        year: 'numeric',\r\n        month: 'long',\r\n        day: 'numeric',\r\n        hour: '2-digit',\r\n        minute: '2-digit',\r\n    })\r\n    return readableDate\r\n}\n\n//# sourceURL=webpack://astroos/./packages/shell/src/utils/date_service.js?");

/***/ }),

/***/ "./packages/shell/src/utils/response.js":
/*!**********************************************!*\
  !*** ./packages/shell/src/utils/response.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Response: () => (/* binding */ Response)\n/* harmony export */ });\nclass Response {\r\n  constructor(status, payload) {\r\n    this._status = status;\r\n    this._payload = payload;\r\n  }\r\n\r\n  get status() {\r\n    return this._status;\r\n  }\r\n  set status(value) {\r\n    this._status = value;\r\n  }\r\n  get payload() {\r\n    return this._payload;\r\n  }\r\n  set payload(payload) {\r\n    this._payload = payload;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://astroos/./packages/shell/src/utils/response.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init_os */ \"./src/init_os.js\");\n/* harmony import */ var _user_user_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user_api */ \"./src/user/user_api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_init_os__WEBPACK_IMPORTED_MODULE_0__]);\n_init_os__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\nawait (0,_init_os__WEBPACK_IMPORTED_MODULE_0__.initOS)();\r\n\r\n\r\n// @toBeDeleted later\r\ndocument.getElementById('loginForm').addEventListener('submit', function(event) {\r\n    event.preventDefault(); // Prevent form submission\r\n    const username = document.getElementById('username').value;\r\n    const password = document.getElementById('password').value;\r\n  \r\n    // # From User API\r\n    (0,_user_user_api__WEBPACK_IMPORTED_MODULE_1__.saveUserAccount)(username, password);\r\n    \r\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://astroos/./src/index.js?");

/***/ }),

/***/ "./src/init_os.js":
/*!************************!*\
  !*** ./src/init_os.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initOS: () => (/* binding */ initOS)\n/* harmony export */ });\n/* harmony import */ var _user_user_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user_api */ \"./src/user/user_api.js\");\n/* harmony import */ var _packages_shell_src_repo_directories_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/shell/src/repo/directories_api */ \"./packages/shell/src/repo/directories_api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_shell_src_repo_directories_api__WEBPACK_IMPORTED_MODULE_1__]);\n_packages_shell_src_repo_directories_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\nasync function initDb() {\r\n  return new Promise((resolve, reject) => { \r\n    const request = indexedDB.open(\"astroOS\", 1);\r\n    request.onerror = function (event) {\r\n      // Handle errors\r\n      reject(\"@initDb: Database open ERROR\");\r\n    };\r\n\r\n    request.onsuccess = function (event) {\r\n      // Database connection opened successfully\r\n      const db = event.target.result;\r\n      //    initializeDataDb(_ROOT_);\r\n      resolve(\"Astro OS Database initialized successfully\");\r\n    };\r\n\r\n    request.onupgradeneeded = function (event) {\r\n      const db = event.target.result;\r\n      const directoriesObjectStore = db.createObjectStore(\"directories\", {\r\n        keyPath: \"id\",\r\n      });\r\n      const fileObjectStore = db.createObjectStore(\"files\", {\r\n        keyPath: \"id\",\r\n      });\r\n      const usersObjectStore = db.createObjectStore(\"users\", {\r\n        keyPath: \"username\",\r\n      });\r\n\r\n      //fetchDataDB();\r\n      resolve(\"AstroOS DB created successfully ✨\");\r\n    };\r\n  }); \r\n}\r\n\r\nasync function initOS() {\r\n  console.log(\"initializing AstroOS...\");\r\n\r\n  // create database\r\n  // await initDb()\r\n  //   .then((res) => {\r\n  //     console.log(res);\r\n\r\n\r\n  //   })\r\n  //   .catch((err) => {\r\n  //     console.log(\"SSSSSSS\");\r\n  //     console.error(err);\r\n  //   });\r\n    setTimeout({}, 10000)\r\n     ;(0,_user_user_api__WEBPACK_IMPORTED_MODULE_0__.createIfGuestUser)()\r\n      .then((result) => {\r\n        let res = result;\r\n        res == \"user\"\r\n          ? console.log(\"Guest account exists\")\r\n          : res == \"none\"\r\n          ? console.log(\"no Guest, Created a new Guest account\")\r\n          : console.log(\"@initOS -- Unexpected result: \", res);\r\n          (0,_packages_shell_src_repo_directories_api__WEBPACK_IMPORTED_MODULE_1__.createIfRootDir)();\r\n      })\r\n      .catch((error) => {\r\n        console.error(\"@initOS :: init_os.js :: #promiseError.\", error);\r\n      });\r\n  // add User\r\n  // check for guest, if not create a guest\r\n  // @TODO\r\n  //return username\r\n\r\n  console.log(\"✨ AstroOS has been initialized!\");\r\n}\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://astroos/./src/init_os.js?");

/***/ }),

/***/ "./src/user/user_api.js":
/*!******************************!*\
  !*** ./src/user/user_api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createIfGuestUser: () => (/* binding */ createIfGuestUser),\n/* harmony export */   getUsername: () => (/* binding */ getUsername),\n/* harmony export */   saveUserAccount: () => (/* binding */ saveUserAccount)\n/* harmony export */ });\nasync function createIfGuestUser() {\r\n  return new Promise((resolve, reject) => {\r\n    const request = indexedDB.open(\"astroOS\", 1);\r\n\r\n    request.onerror = function (event) {\r\n      reject(\"Database error: \" + event.target.errorCode);\r\n    };\r\n\r\n    request.onsuccess = function (event) {\r\n      const db = event.target.result;\r\n      // Create transaction and object store\r\n      const transaction = db.transaction([\"users\"], \"readwrite\");\r\n      const store = transaction.objectStore(\"users\");\r\n\r\n      const getRequest = store.get(\"user\");\r\n\r\n      getRequest.onsuccess = function (event) {\r\n        const guest = event.target.result;\r\n        if (guest) {\r\n          // Meaning there's a guest\r\n\r\n          resolve(guest.username);\r\n        } else {\r\n          saveUserAccount(\"user\", \"password\");\r\n          resolve(\"none\");\r\n        }\r\n      };\r\n\r\n      getRequest.onerror = function (event) {\r\n        reject(\r\n          \"@createGuestUser() :: user_api.js Error: \" + event.target.errorCode\r\n        );\r\n      };\r\n    };\r\n  });\r\n}\r\n\r\nfunction saveUserAccount(username, password) {\r\n  // Open or create IndexedDB database\r\n  const request = indexedDB.open(\"astroOS\", 1);\r\n\r\n  request.onerror = function (event) {\r\n    console.error(\"Database error: \" + event.target.errorCode);\r\n  };\r\n\r\n  request.onsuccess = function (event) {\r\n    const db = event.target.result;\r\n    // Create transaction and object store\r\n    const transaction = db.transaction([\"users\"], \"readwrite\");\r\n    const store = transaction.objectStore(\"users\");\r\n    // Add user account data\r\n    const account = { username: username, password: password };\r\n    const addRequest = store.add(account);\r\n\r\n    addRequest.onsuccess = function (event) {\r\n      console.log(\"User account added successfully\");\r\n    };\r\n\r\n    addRequest.onerror = function (event) {\r\n      console.error(\"Error adding user account: \" + event.target.errorCode);\r\n    };\r\n  };\r\n}\r\nasync function getUsername() {\r\n  let username = \"\";\r\n  await getUsersFromDb()\r\n    .then((records) => {\r\n      if (records.length == 1) {\r\n        // emit guest\r\n        username = records[0];\r\n      } else {\r\n        // @TODO\r\n        // emit username using a proper logic\r\n        username = records[0] != \"user\" ? records[0] : records[1];\r\n      }\r\n    })\r\n    .catch((error) => {\r\n      console.error(\"ERROR: \", error);\r\n    });\r\n\r\n  return username;\r\n}\r\n\r\nfunction getUsersFromDb() {\r\n  return new Promise((resolve, reject) => {\r\n    // Open the IndexedDB database\r\n    const request = indexedDB.open(\"astroOS\", 1);\r\n\r\n    request.onerror = function (event) {\r\n      reject(\"Database error: \" + event.target.errorCode);\r\n    };\r\n\r\n    request.onsuccess = function (event) {\r\n      const db = event.target.result;\r\n      // Start a new transaction to read from the object store\r\n      const transaction = db.transaction([\"users\"], \"readonly\");\r\n      const store = transaction.objectStore(\"users\");\r\n      // Open a cursor to iterate over all records\r\n      const cursorRequest = store.openCursor();\r\n\r\n      const records = [];\r\n\r\n      cursorRequest.onsuccess = function (event) {\r\n        const cursor = event.target.result;\r\n        if (cursor) {\r\n          // Push record into array\r\n          records.push(cursor.value.username);\r\n          // Move to next record\r\n          cursor.continue();\r\n        } else {\r\n          // Resolve promise with all records\r\n          resolve(records);\r\n        }\r\n      };\r\n\r\n      cursorRequest.onerror = function (event) {\r\n        reject(\"Error fetching records: \" + event.target.errorCode);\r\n      };\r\n    };\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://astroos/./src/user/user_api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;