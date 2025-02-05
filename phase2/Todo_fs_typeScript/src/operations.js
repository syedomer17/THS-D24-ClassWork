"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
exports.viewTodo = viewTodo;
//@ts-ignore
var readline_sync_1 = require("readline-sync");
var promises_1 = require("fs/promises");
function readTodoFile() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, promises_1.default.readFile("todos.json", "utf-8")];
        });
    });
}
function writeTodoFile(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promises_1.default.writeFile("todos.json", data)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function addTodo() {
    return __awaiter(this, void 0, void 0, function () {
        var title, newTodo, todosData, todosArray, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    title = readline_sync_1.default.question("Enter the title of the new todo item: ");
                    while (!title) {
                        console.log("Please add a valid todo");
                        title = readline_sync_1.default.question("Enter the title of the new todo item: ");
                    }
                    newTodo = {
                        title: title,
                        isDone: false,
                    };
                    return [4 /*yield*/, readTodoFile()];
                case 1:
                    todosData = _a.sent();
                    todosArray = todosData ? JSON.parse(todosData) : [];
                    todosArray.push(newTodo);
                    return [4 /*yield*/, writeTodoFile(JSON.stringify(todosArray))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error adding todo:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateTodo() {
    return __awaiter(this, void 0, void 0, function () {
        var todosData, todos, index, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, readTodoFile()];
                case 1:
                    todosData = _a.sent();
                    todos = JSON.parse(todosData);
                    todos.forEach(function (todo, index) {
                        var status = todo.isDone ? "[Done]" : "[Not Done]";
                        console.log("".concat(index + 1, ". ").concat(todo.title, " ").concat(status));
                    });
                    index = readline_sync_1.default.questionInt("Enter the number of the todo to mark as done: ") - 1;
                    if (!(index >= 0 && index < todos.length)) return [3 /*break*/, 5];
                    if (!todos[index].isDone) return [3 /*break*/, 2];
                    console.log("\"".concat(todos[index].title, "\" is already marked as done."));
                    return [3 /*break*/, 4];
                case 2:
                    todos[index].isDone = true;
                    console.log("\"".concat(todos[index].title, "\" has been marked as done."));
                    return [4 /*yield*/, writeTodoFile(JSON.stringify(todos))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    console.log("Invalid selection. Please enter a valid number.");
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_2 = _a.sent();
                    console.error("Error updating todo:", error_2);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function deleteTodo() {
    return __awaiter(this, void 0, void 0, function () {
        var todosData, todos, index, removed, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, readTodoFile()];
                case 1:
                    todosData = _a.sent();
                    todos = JSON.parse(todosData);
                    todos.forEach(function (todo, index) {
                        console.log("".concat(index + 1, ". ").concat(todo.title, " - ").concat(todo.isDone ? "Done" : "Not Done"));
                    });
                    index = readline_sync_1.default.questionInt("Enter the number of the todo to delete: ") - 1;
                    if (!(index >= 0 && index < todos.length)) return [3 /*break*/, 3];
                    removed = todos.splice(index, 1);
                    console.log("Todo \"".concat(removed[0].title, "\" is deleted."));
                    return [4 /*yield*/, writeTodoFile(JSON.stringify(todos))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    console.log("Invalid number. Please try again.");
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_3 = _a.sent();
                    console.error("Error deleting todo:", error_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function viewTodo() {
    return __awaiter(this, void 0, void 0, function () {
        var todosData, todos, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, readTodoFile()];
                case 1:
                    todosData = _a.sent();
                    todos = JSON.parse(todosData);
                    todos.forEach(function (todo, index) {
                        var status = todo.isDone ? "[Done]" : "[Not Done]";
                        console.log("".concat(index + 1, ". ").concat(todo.title, " ").concat(status));
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error("Error viewing todos:", error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
