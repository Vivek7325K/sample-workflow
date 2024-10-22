"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@vhidvz/wfjs/common");
const wfjs_1 = require("@vhidvz/wfjs");
let namingWorkflow = (() => {
    let _classDecorators = [(0, common_1.Process)({ name: 'Naming Workflow' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _start_decorators;
    let _sendSMS_decorators;
    let _doNothing_decorators;
    let _sendEmail_decorators;
    var namingWorkflow = _classThis = class {
        constructor(name) {
            this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, void 0));
            __runInitializers(this, _name_extraInitializers);
            this.name = name;
        }
        start(activity, name) {
            return __awaiter(this, void 0, void 0, function* () {
                if (name === "Ishaan") {
                    activity.takeOutgoing();
                }
                else if (name === "Vivek") {
                    activity.takeOutgoing();
                }
                else if (name === "Vivek Lal") {
                    activity.takeOutgoing();
                }
            });
        }
        sendSMS(activity) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('SMS: Sent SMS to Ishaan.');
                activity.takeOutgoing();
            });
        }
        doNothing(activity) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('No action taken for Vivek.');
                activity.takeOutgoing();
            });
        }
        sendEmail(activity) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('Email: Sent email to Vivek Lal.');
                activity.takeOutgoing();
            });
        }
    };
    __setFunctionName(_classThis, "namingWorkflow");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [(0, common_1.Value)()];
        _start_decorators = [(0, common_1.Node)({ name: 'start' })];
        _sendSMS_decorators = [(0, common_1.Node)({ name: 'Send SMS' })];
        _doNothing_decorators = [(0, common_1.Node)({ name: 'Do Nothing' })];
        _sendEmail_decorators = [(0, common_1.Node)({ name: 'Send Email' })];
        __esDecorate(_classThis, null, _start_decorators, { kind: "method", name: "start", static: false, private: false, access: { has: obj => "start" in obj, get: obj => obj.start }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _sendSMS_decorators, { kind: "method", name: "sendSMS", static: false, private: false, access: { has: obj => "sendSMS" in obj, get: obj => obj.sendSMS }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _doNothing_decorators, { kind: "method", name: "doNothing", static: false, private: false, access: { has: obj => "doNothing" in obj, get: obj => obj.doNothing }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _sendEmail_decorators, { kind: "method", name: "sendEmail", static: false, private: false, access: { has: obj => "sendEmail" in obj, get: obj => obj.sendEmail }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        namingWorkflow = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return namingWorkflow = _classThis;
})();
(() => __awaiter(void 0, void 0, void 0, function* () {
    const workflow = wfjs_1.WorkflowJS.build();
    const { context } = yield workflow.execute({
        factory: () => new namingWorkflow("Ishaan"),
        // Data:"Ishaan", //bpmn
    });
    console.debug('\nContext is:', JSON.stringify(context.serialize(), null, 2));
}))();
