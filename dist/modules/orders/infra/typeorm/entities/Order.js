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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Customer_1 = __importDefault(require("@modules/customers/infra/typeorm/entities/Customer"));
var OrdersProducts_1 = __importDefault(require("@modules/orders/infra/typeorm/entities/OrdersProducts"));
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Order.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Customer_1.default; }),
        typeorm_1.JoinColumn({ name: 'customer_id' }),
        __metadata("design:type", Customer_1.default)
    ], Order.prototype, "customer", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return OrdersProducts_1.default; }, function (order_product) { return order_product.order; }),
        __metadata("design:type", Array)
    ], Order.prototype, "order_products", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Order.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Order.prototype, "updated_at", void 0);
    Order = __decorate([
        typeorm_1.Entity('Orders')
    ], Order);
    return Order;
}());
exports.default = Order;
