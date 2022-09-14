"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terminy = void 0;
const typeorm_1 = require("typeorm");
const Car_1 = require("./Car");
let Terminy = class Terminy {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Terminy.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Terminy.prototype, "DataStart", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Terminy.prototype, "DataZwrotu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Car_1.Car, (car) => car.Lents),
    __metadata("design:type", Car_1.Car)
], Terminy.prototype, "car", void 0);
Terminy = __decorate([
    (0, typeorm_1.Entity)()
], Terminy);
exports.Terminy = Terminy;
//# sourceMappingURL=Terminy.js.map