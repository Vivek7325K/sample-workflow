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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@vhidvz/wfjs/core");
const common_1 = require("@vhidvz/wfjs/common");
const wfjs_1 = require("@vhidvz/wfjs");
let PizzaCustomer = class PizzaCustomer extends wfjs_1.WorkflowJS {
    hungryForPizza(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in hungryForPizza is:', data);
            console.log('value in hungryForPizza is:', value);
            data.value = value + ' ' + data.value;
            activity.takeOutgoing();
            return 'selected';
        });
    }
    orderAPizza(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in orderAPizza is:', data);
            console.log('value in orderAPizza is:', value);
            data.value = data.value + ' ' + value;
            activity.takeOutgoing();
        });
    }
    whereIsMyPizza(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in whereIsMyPizza is:', data);
            console.log('value in whereIsMyPizza is:', value);
            activity.takeOutgoing({ name: '1 Minutes' });
        });
    }
    _1minutes(activity) {
        activity.takeOutgoing(undefined, { pause: true });
    }
    askForThePizza(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in askForThePizza is:', data);
            console.log('value in askForThePizza is:', value);
            activity.takeOutgoing();
        });
    }
    pizzaReceived(value, data, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('data in pizzaReceived is:', data);
            console.log('value in pizzaReceived is:', value);
            activity.takeOutgoing();
            return 'received';
        });
    }
    hungerSatisfied(value, data) {
        console.log('data in hungerSatisfied is:', data);
        console.log('value in hungerSatisfied is:', value);
        data.value = value + ' ' + data.value;
    }
};
__decorate([
    (0, common_1.Node)({ name: 'Hungry for Pizza' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.EventActivity]),
    __metadata("design:returntype", Promise)
], PizzaCustomer.prototype, "hungryForPizza", null);
__decorate([
    (0, common_1.Node)({ name: 'Order a Pizza' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.TaskActivity]),
    __metadata("design:returntype", Promise)
], PizzaCustomer.prototype, "orderAPizza", null);
__decorate([
    (0, common_1.Node)({ id: 'Gateway_0s7y3gr' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.GatewayActivity]),
    __metadata("design:returntype", Promise)
], PizzaCustomer.prototype, "whereIsMyPizza", null);
__decorate([
    (0, common_1.Node)({ name: '1 Minutes' }),
    __param(0, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.EventActivity]),
    __metadata("design:returntype", void 0)
], PizzaCustomer.prototype, "_1minutes", null);
__decorate([
    (0, common_1.Node)({ name: 'Ask for the pizza' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.TaskActivity]),
    __metadata("design:returntype", Promise)
], PizzaCustomer.prototype, "askForThePizza", null);
__decorate([
    (0, common_1.Node)({ name: 'Pizza Received' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __param(2, (0, common_1.Act)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, core_1.EventActivity]),
    __metadata("design:returntype", Promise)
], PizzaCustomer.prototype, "pizzaReceived", null);
__decorate([
    (0, common_1.Node)({ name: 'Hunger Satisfied' }),
    __param(0, (0, common_1.Value)()),
    __param(1, (0, common_1.Data)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PizzaCustomer.prototype, "hungerSatisfied", null);
PizzaCustomer = __decorate([
    (0, common_1.Process)({
        name: 'Pizza Customer',
        path: './dist/supplying-pizza.bpmn',
    })
], PizzaCustomer);
(() => __awaiter(void 0, void 0, void 0, function* () {
    const workflow = PizzaCustomer.build();
    const { context } = yield workflow.execute({ data: { value: 'pizza' }, value: 'pepperoni' });
    const ctx = context.serialize(); // plain json object can store it to your DB
    console.debug('\nContext is:', JSON.stringify(ctx, null, 2));
    // After 60 Minutes
    const exec = yield workflow.execute({
        context: wfjs_1.Context.deserialize(ctx),
        node: { name: 'Ask for the pizza' },
        value: 'Hey?',
    });
    console.debug('\nContext is:', JSON.stringify(exec.context.serialize(), null, 2));
}))();
//# sourceMappingURL=example_01.js.map