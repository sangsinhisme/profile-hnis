"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[424], {
    9424: function(e, t, n) {
        var r, i;
        let s, o, a, c, u;
        n.d(t, {
            S1: function() {
                return t7
            }
        });
        let l = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
            , p = "8.26.0"
            , d = globalThis;
        function h(e, t, n) {
            let r = n || d
                , i = r.__SENTRY__ = r.__SENTRY__ || {}
                , s = i[p] = i[p] || {};
            return s[e] || (s[e] = t())
        }
        let f = ["debug", "info", "warn", "error", "log", "assert", "trace"]
            , _ = {};
        function g(e) {
            if (!("console"in d))
                return e();
            let t = d.console
                , n = {}
                , r = Object.keys(_);
            r.forEach(e => {
                    let r = _[e];
                    n[e] = t[e],
                        t[e] = r
                }
            );
            try {
                return e()
            } finally {
                r.forEach(e => {
                        t[e] = n[e]
                    }
                )
            }
        }
        let m = function() {
            let e = !1
                , t = {
                enable: () => {
                    e = !0
                }
                ,
                disable: () => {
                    e = !1
                }
                ,
                isEnabled: () => e
            };
            return l ? f.forEach(n => {
                    t[n] = (...t) => {
                        e && g( () => {
                                d.console[n](`Sentry Logger [${n}]:`, ...t)
                            }
                        )
                    }
                }
            ) : f.forEach(e => {
                    t[e] = () => void 0
                }
            ),
                t
        }()
            , y = Object.prototype.toString;
        function v(e) {
            switch (y.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return N(e, Error)
            }
        }
        function E(e, t) {
            return y.call(e) === `[object ${t}]`
        }
        function b(e) {
            return E(e, "ErrorEvent")
        }
        function S(e) {
            return E(e, "DOMError")
        }
        function x(e) {
            return E(e, "String")
        }
        function w(e) {
            return "object" == typeof e && null !== e && "__sentry_template_string__"in e && "__sentry_template_values__"in e
        }
        function k(e) {
            return null === e || w(e) || "object" != typeof e && "function" != typeof e
        }
        function O(e) {
            return E(e, "Object")
        }
        function $(e) {
            return "undefined" != typeof Event && N(e, Event)
        }
        function D(e) {
            return !!(e && e.then && "function" == typeof e.then)
        }
        function N(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return !1
            }
        }
        function T(e) {
            return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue))
        }
        function I(e, t={}) {
            if (!e)
                return "<unknown>";
            try {
                let n, r = e, i = [], s = 0, o = 0, a = Array.isArray(t) ? t : t.keyAttrs, c = !Array.isArray(t) && t.maxStringLength || 80;
                for (; r && s++ < 5 && (n = function(e, t) {
                    let n = [];
                    if (!e || !e.tagName)
                        return "";
                    if (d.HTMLElement && e instanceof HTMLElement && e.dataset) {
                        if (e.dataset.sentryComponent)
                            return e.dataset.sentryComponent;
                        if (e.dataset.sentryElement)
                            return e.dataset.sentryElement
                    }
                    n.push(e.tagName.toLowerCase());
                    let r = t && t.length ? t.filter(t => e.getAttribute(t)).map(t => [t, e.getAttribute(t)]) : null;
                    if (r && r.length)
                        r.forEach(e => {
                                n.push(`[${e[0]}="${e[1]}"]`)
                            }
                        );
                    else {
                        e.id && n.push(`#${e.id}`);
                        let t = e.className;
                        if (t && x(t))
                            for (let e of t.split(/\s+/))
                                n.push(`.${e}`)
                    }
                    for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                        let r = e.getAttribute(t);
                        r && n.push(`[${t}="${r}"]`)
                    }
                    return n.join("")
                }(r, a),
                "html" !== n && (!(s > 1) || !(o + 3 * i.length + n.length >= c))); )
                    i.push(n),
                        o += n.length,
                        r = r.parentNode;
                return i.reverse().join(" > ")
            } catch (e) {
                return "<unknown>"
            }
        }
        function P(e, t=0) {
            return "string" != typeof e || 0 === t ? e : e.length <= t ? e : `${e.slice(0, t)}...`
        }
        function C(e, t) {
            if (!Array.isArray(e))
                return "";
            let n = [];
            for (let t = 0; t < e.length; t++) {
                let r = e[t];
                try {
                    T(r) ? n.push("[VueViewModel]") : n.push(String(r))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }
        function R(e, t=[], n=!1) {
            return t.some(t => (function(e, t, n=!1) {
                    return !!x(e) && (E(t, "RegExp") ? t.test(e) : !!x(t) && (n ? e === t : e.includes(t)))
                }
            )(e, t, n))
        }
        function j(e, t, n) {
            if (!(t in e))
                return;
            let r = e[t]
                , i = n(r);
            "function" == typeof i && L(i, r),
                e[t] = i
        }
        function A(e, t, n) {
            try {
                Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            } catch (n) {
                l && m.log(`Failed to add non-enumerable property "${t}" to object`, e)
            }
        }
        function L(e, t) {
            try {
                let n = t.prototype || {};
                e.prototype = t.prototype = n,
                    A(e, "__sentry_original__", t)
            } catch (e) {}
        }
        function M(e) {
            return e.__sentry_original__
        }
        function U(e) {
            if (v(e))
                return {
                    message: e.message,
                    name: e.name,
                    stack: e.stack,
                    ...F(e)
                };
            if (!$(e))
                return e;
            {
                let t = {
                    type: e.type,
                    target: q(e.target),
                    currentTarget: q(e.currentTarget),
                    ...F(e)
                };
                return "undefined" != typeof CustomEvent && N(e, CustomEvent) && (t.detail = e.detail),
                    t
            }
        }
        function q(e) {
            try {
                return "undefined" != typeof Element && N(e, Element) ? I(e) : Object.prototype.toString.call(e)
            } catch (e) {
                return "<unknown>"
            }
        }
        function F(e) {
            if ("object" != typeof e || null === e)
                return {};
            {
                let t = {};
                for (let n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }
        }
        function Y(e) {
            return function e(t, n) {
                if (function(e) {
                    if (!O(e))
                        return !1;
                    try {
                        let t = Object.getPrototypeOf(e).constructor.name;
                        return !t || "Object" === t
                    } catch (e) {
                        return !0
                    }
                }(t)) {
                    let r = n.get(t);
                    if (void 0 !== r)
                        return r;
                    let i = {};
                    for (let r of (n.set(t, i),
                        Object.keys(t)))
                        void 0 !== t[r] && (i[r] = e(t[r], n));
                    return i
                }
                if (Array.isArray(t)) {
                    let r = n.get(t);
                    if (void 0 !== r)
                        return r;
                    let i = [];
                    return n.set(t, i),
                        t.forEach(t => {
                                i.push(e(t, n))
                            }
                        ),
                        i
                }
                return t
            }(e, new Map)
        }
        function H() {
            let e = d.crypto || d.msCrypto
                , t = () => 16 * Math.random();
            try {
                if (e && e.randomUUID)
                    return e.randomUUID().replace(/-/g, "");
                e && e.getRandomValues && (t = () => {
                        let t = new Uint8Array(1);
                        return e.getRandomValues(t),
                            t[0]
                    }
                )
            } catch (e) {}
            return "10000000100040008000100000000000".replace(/[018]/g, e => (e ^ (15 & t()) >> e / 4).toString(16))
        }
        function B(e) {
            return e.exception && e.exception.values ? e.exception.values[0] : void 0
        }
        function G(e) {
            let {message: t, event_id: n} = e;
            if (t)
                return t;
            let r = B(e);
            return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }
        function W(e, t, n) {
            let r = e.exception = e.exception || {}
                , i = r.values = r.values || []
                , s = i[0] = i[0] || {};
            s.value || (s.value = t || ""),
            s.type || (s.type = n || "Error")
        }
        function J(e, t) {
            let n = B(e);
            if (!n)
                return;
            let r = n.mechanism;
            if (n.mechanism = {
                type: "generic",
                handled: !0,
                ...r,
                ...t
            },
            t && "data"in t) {
                let e = {
                    ...r && r.data,
                    ...t.data
                };
                n.mechanism.data = e
            }
        }
        function z(e) {
            if (e && e.__sentry_captured__)
                return !0;
            try {
                A(e, "__sentry_captured__", !0)
            } catch (e) {}
            return !1
        }
        function V(e) {
            return Array.isArray(e) ? e : [e]
        }
        let K = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
            , X = [];
        function Q(e, t) {
            for (let n of t)
                n && n.afterAllSetup && n.afterAllSetup(e)
        }
        function Z(e, t, n) {
            if (n[t.name]) {
                K && m.log(`Integration skipped because it was already installed: ${t.name}`);
                return
            }
            if (n[t.name] = t,
            -1 === X.indexOf(t.name) && "function" == typeof t.setupOnce && (t.setupOnce(),
                X.push(t.name)),
            t.setup && "function" == typeof t.setup && t.setup(e),
            "function" == typeof t.preprocessEvent) {
                let n = t.preprocessEvent.bind(t);
                e.on("preprocessEvent", (t, r) => n(t, r, e))
            }
            if ("function" == typeof t.processEvent) {
                let n = t.processEvent.bind(t)
                    , r = Object.assign( (t, r) => n(t, r, e), {
                    id: t.name
                });
                e.addEventProcessor(r)
            }
            K && m.log(`Integration installed: ${t.name}`)
        }
        let ee = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"]
            , et = (e={}) => ({
            name: "InboundFilters",
            processEvent: (t, n, r) => {
                var i, s;
                return ((i = function(e={}, t={}) {
                    return {
                        allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                        denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                        ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : ee],
                        ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []],
                        ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                    }
                }(e, r.getOptions())).ignoreInternal && function(e) {
                    try {
                        return "SentryError" === e.exception.values[0].type
                    } catch (e) {}
                    return !1
                }(t) ? (K && m.warn(`Event dropped due to being internal Sentry Error.
Event: ${G(t)}`),
                    0) : (s = i.ignoreErrors,
                !t.type && s && s.length && (function(e) {
                        let t;
                        let n = [];
                        e.message && n.push(e.message);
                        try {
                            t = e.exception.values[e.exception.values.length - 1]
                        } catch (e) {}
                        return t && t.value && (n.push(t.value),
                        t.type && n.push(`${t.type}: ${t.value}`)),
                            n
                    }
                )(t).some(e => R(e, s))) ? (K && m.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${G(t)}`),
                    0) : t.type || !t.exception || !t.exception.values || 0 === t.exception.values.length || t.message || t.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value) ? !function(e, t) {
                    if ("transaction" !== e.type || !t || !t.length)
                        return !1;
                    let n = e.transaction;
                    return !!n && R(n, t)
                }(t, i.ignoreTransactions) ? !function(e, t) {
                    if (!t || !t.length)
                        return !1;
                    let n = en(e);
                    return !!n && R(n, t)
                }(t, i.denyUrls) ? function(e, t) {
                    if (!t || !t.length)
                        return !0;
                    let n = en(e);
                    return !n || R(n, t)
                }(t, i.allowUrls) || (K && m.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${G(t)}.
Url: ${en(t)}`),
                    0) : (K && m.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${G(t)}.
Url: ${en(t)}`),
                    0) : (K && m.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${G(t)}`),
                    0) : (K && m.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${G(t)}`),
                    0)) ? t : null
            }
        });
        function en(e) {
            try {
                let t;
                try {
                    t = e.exception.values[0].stacktrace.frames
                } catch (e) {}
                return t ? function(e=[]) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                            return n.filename || null
                    }
                    return null
                }(t) : null
            } catch (t) {
                return K && m.error(`Cannot extract url for event ${G(e)}`),
                    null
            }
        }
        function er() {
            return ei(d),
                d
        }
        function ei(e) {
            let t = e.__SENTRY__ = e.__SENTRY__ || {};
            return t.version = t.version || p,
                t[p] = t[p] || {}
        }
        function es() {
            return {
                traceId: H(),
                spanId: H().substring(16)
            }
        }
        function eo() {
            return Date.now() / 1e3
        }
        let ea = function() {
            let {performance: e} = d;
            if (!e || !e.now)
                return eo;
            let t = Date.now() - e.now()
                , n = void 0 == e.timeOrigin ? t : e.timeOrigin;
            return () => (n + e.now()) / 1e3
        }();
        function ec(e, t={}) {
            if (!t.user || (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
            e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
                e.timestamp = t.timestamp || ea(),
            t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
            t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
            t.sid && (e.sid = 32 === t.sid.length ? t.sid : H()),
            void 0 !== t.init && (e.init = t.init),
            !e.did && t.did && (e.did = `${t.did}`),
            "number" == typeof t.started && (e.started = t.started),
                e.ignoreDuration)
                e.duration = void 0;
            else if ("number" == typeof t.duration)
                e.duration = t.duration;
            else {
                let t = e.timestamp - e.started;
                e.duration = t >= 0 ? t : 0
            }
            t.release && (e.release = t.release),
            t.environment && (e.environment = t.environment),
            !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
            !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
            "number" == typeof t.errors && (e.errors = t.errors),
            t.status && (e.status = t.status)
        }
        ( () => {
                let {performance: e} = d;
                if (!e || !e.now)
                    return;
                let t = e.now()
                    , n = Date.now()
                    , r = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5
                    , i = e.timing && e.timing.navigationStart
                    , s = "number" == typeof i ? Math.abs(i + t - n) : 36e5;
                if (r < 36e5 || s < 36e5)
                    return r <= s ? e.timeOrigin : void 0
            }
        )();
        let eu = "_sentrySpan";
        function el(e, t) {
            t ? A(e, eu, t) : delete e[eu]
        }
        class ep {
            constructor() {
                this._notifyingListeners = !1,
                    this._scopeListeners = [],
                    this._eventProcessors = [],
                    this._breadcrumbs = [],
                    this._attachments = [],
                    this._user = {},
                    this._tags = {},
                    this._extra = {},
                    this._contexts = {},
                    this._sdkProcessingMetadata = {},
                    this._propagationContext = es()
            }
            clone() {
                let e = new ep;
                return e._breadcrumbs = [...this._breadcrumbs],
                    e._tags = {
                        ...this._tags
                    },
                    e._extra = {
                        ...this._extra
                    },
                    e._contexts = {
                        ...this._contexts
                    },
                    e._user = this._user,
                    e._level = this._level,
                    e._session = this._session,
                    e._transactionName = this._transactionName,
                    e._fingerprint = this._fingerprint,
                    e._eventProcessors = [...this._eventProcessors],
                    e._requestSession = this._requestSession,
                    e._attachments = [...this._attachments],
                    e._sdkProcessingMetadata = {
                        ...this._sdkProcessingMetadata
                    },
                    e._propagationContext = {
                        ...this._propagationContext
                    },
                    e._client = this._client,
                    e._lastEventId = this._lastEventId,
                    el(e, this[eu]),
                    e
            }
            setClient(e) {
                this._client = e
            }
            setLastEventId(e) {
                this._lastEventId = e
            }
            getClient() {
                return this._client
            }
            lastEventId() {
                return this._lastEventId
            }
            addScopeListener(e) {
                this._scopeListeners.push(e)
            }
            addEventProcessor(e) {
                return this._eventProcessors.push(e),
                    this
            }
            setUser(e) {
                return this._user = e || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    username: void 0
                },
                this._session && ec(this._session, {
                    user: e
                }),
                    this._notifyScopeListeners(),
                    this
            }
            getUser() {
                return this._user
            }
            getRequestSession() {
                return this._requestSession
            }
            setRequestSession(e) {
                return this._requestSession = e,
                    this
            }
            setTags(e) {
                return this._tags = {
                    ...this._tags,
                    ...e
                },
                    this._notifyScopeListeners(),
                    this
            }
            setTag(e, t) {
                return this._tags = {
                    ...this._tags,
                    [e]: t
                },
                    this._notifyScopeListeners(),
                    this
            }
            setExtras(e) {
                return this._extra = {
                    ...this._extra,
                    ...e
                },
                    this._notifyScopeListeners(),
                    this
            }
            setExtra(e, t) {
                return this._extra = {
                    ...this._extra,
                    [e]: t
                },
                    this._notifyScopeListeners(),
                    this
            }
            setFingerprint(e) {
                return this._fingerprint = e,
                    this._notifyScopeListeners(),
                    this
            }
            setLevel(e) {
                return this._level = e,
                    this._notifyScopeListeners(),
                    this
            }
            setTransactionName(e) {
                return this._transactionName = e,
                    this._notifyScopeListeners(),
                    this
            }
            setContext(e, t) {
                return null === t ? delete this._contexts[e] : this._contexts[e] = t,
                    this._notifyScopeListeners(),
                    this
            }
            setSession(e) {
                return e ? this._session = e : delete this._session,
                    this._notifyScopeListeners(),
                    this
            }
            getSession() {
                return this._session
            }
            update(e) {
                if (!e)
                    return this;
                let t = "function" == typeof e ? e(this) : e
                    , [n,r] = t instanceof ed ? [t.getScopeData(), t.getRequestSession()] : O(t) ? [e, e.requestSession] : []
                    , {tags: i, extra: s, user: o, contexts: a, level: c, fingerprint: u=[], propagationContext: l} = n || {};
                return this._tags = {
                    ...this._tags,
                    ...i
                },
                    this._extra = {
                        ...this._extra,
                        ...s
                    },
                    this._contexts = {
                        ...this._contexts,
                        ...a
                    },
                o && Object.keys(o).length && (this._user = o),
                c && (this._level = c),
                u.length && (this._fingerprint = u),
                l && (this._propagationContext = l),
                r && (this._requestSession = r),
                    this
            }
            clear() {
                return this._breadcrumbs = [],
                    this._tags = {},
                    this._extra = {},
                    this._user = {},
                    this._contexts = {},
                    this._level = void 0,
                    this._transactionName = void 0,
                    this._fingerprint = void 0,
                    this._requestSession = void 0,
                    this._session = void 0,
                    el(this, void 0),
                    this._attachments = [],
                    this._propagationContext = es(),
                    this._notifyScopeListeners(),
                    this
            }
            addBreadcrumb(e, t) {
                let n = "number" == typeof t ? t : 100;
                if (n <= 0)
                    return this;
                let r = {
                    timestamp: eo(),
                    ...e
                }
                    , i = this._breadcrumbs;
                return i.push(r),
                    this._breadcrumbs = i.length > n ? i.slice(-n) : i,
                    this._notifyScopeListeners(),
                    this
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [],
                    this._notifyScopeListeners(),
                    this
            }
            addAttachment(e) {
                return this._attachments.push(e),
                    this
            }
            clearAttachments() {
                return this._attachments = [],
                    this
            }
            getScopeData() {
                return {
                    breadcrumbs: this._breadcrumbs,
                    attachments: this._attachments,
                    contexts: this._contexts,
                    tags: this._tags,
                    extra: this._extra,
                    user: this._user,
                    level: this._level,
                    fingerprint: this._fingerprint || [],
                    eventProcessors: this._eventProcessors,
                    propagationContext: this._propagationContext,
                    sdkProcessingMetadata: this._sdkProcessingMetadata,
                    transactionName: this._transactionName,
                    span: this[eu]
                }
            }
            setSDKProcessingMetadata(e) {
                return this._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata,
                    ...e
                },
                    this
            }
            setPropagationContext(e) {
                return this._propagationContext = e,
                    this
            }
            getPropagationContext() {
                return this._propagationContext
            }
            captureException(e, t) {
                let n = t && t.event_id ? t.event_id : H();
                if (!this._client)
                    return m.warn("No client configured on scope - will not capture exception!"),
                        n;
                let r = Error("Sentry syntheticException");
                return this._client.captureException(e, {
                    originalException: e,
                    syntheticException: r,
                    ...t,
                    event_id: n
                }, this),
                    n
            }
            captureMessage(e, t, n) {
                let r = n && n.event_id ? n.event_id : H();
                if (!this._client)
                    return m.warn("No client configured on scope - will not capture message!"),
                        r;
                let i = Error(e);
                return this._client.captureMessage(e, t, {
                    originalException: e,
                    syntheticException: i,
                    ...n,
                    event_id: r
                }, this),
                    r
            }
            captureEvent(e, t) {
                let n = t && t.event_id ? t.event_id : H();
                return this._client ? this._client.captureEvent(e, {
                    ...t,
                    event_id: n
                }, this) : m.warn("No client configured on scope - will not capture event!"),
                    n
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0,
                    this._scopeListeners.forEach(e => {
                            e(this)
                        }
                    ),
                    this._notifyingListeners = !1)
            }
        }
        let ed = ep;
        class eh {
            constructor(e, t) {
                let n, r;
                n = e || new ed,
                    r = t || new ed,
                    this._stack = [{
                        scope: n
                    }],
                    this._isolationScope = r
            }
            withScope(e) {
                let t;
                let n = this._pushScope();
                try {
                    t = e(n)
                } catch (e) {
                    throw this._popScope(),
                        e
                }
                return D(t) ? t.then(e => (this._popScope(),
                        e), e => {
                        throw this._popScope(),
                            e
                    }
                ) : (this._popScope(),
                    t)
            }
            getClient() {
                return this.getStackTop().client
            }
            getScope() {
                return this.getStackTop().scope
            }
            getIsolationScope() {
                return this._isolationScope
            }
            getStackTop() {
                return this._stack[this._stack.length - 1]
            }
            _pushScope() {
                let e = this.getScope().clone();
                return this._stack.push({
                    client: this.getClient(),
                    scope: e
                }),
                    e
            }
            _popScope() {
                return !(this._stack.length <= 1) && !!this._stack.pop()
            }
        }
        function ef() {
            let e = ei(er());
            return e.stack = e.stack || new eh(h("defaultCurrentScope", () => new ed),h("defaultIsolationScope", () => new ed))
        }
        function e_(e) {
            return ef().withScope(e)
        }
        function eg(e, t) {
            let n = ef();
            return n.withScope( () => (n.getStackTop().scope = e,
                t(e)))
        }
        function em(e) {
            return ef().withScope( () => e(ef().getIsolationScope()))
        }
        function ey(e) {
            let t = ei(e);
            return t.acs ? t.acs : {
                withIsolationScope: em,
                withScope: e_,
                withSetScope: eg,
                withSetIsolationScope: (e, t) => em(t),
                getCurrentScope: () => ef().getScope(),
                getIsolationScope: () => ef().getIsolationScope()
            }
        }
        function ev() {
            return ey(er()).getCurrentScope()
        }
        function eE() {
            return ey(er()).getIsolationScope()
        }
        function eb() {
            return ev().getClient()
        }
        let eS = new WeakMap
            , ex = () => ({
            name: "FunctionToString",
            setupOnce() {
                s = Function.prototype.toString;
                try {
                    Function.prototype.toString = function(...e) {
                        let t = M(this)
                            , n = eS.has(eb()) && void 0 !== t ? t : this;
                        return s.apply(n, e)
                    }
                } catch (e) {}
            },
            setup(e) {
                eS.set(e, !0)
            }
        })
            , ew = /\(error: (.*)\)/
            , ek = /captureMessage|captureException/;
        function eO(...e) {
            let t = e.sort( (e, t) => e[0] - t[0]).map(e => e[1]);
            return (e, n=0, r=0) => {
                let i = []
                    , s = e.split("\n");
                for (let e = n; e < s.length; e++) {
                    let n = s[e];
                    if (n.length > 1024)
                        continue;
                    let o = ew.test(n) ? n.replace(ew, "$1") : n;
                    if (!o.match(/\S*Error: /)) {
                        for (let e of t) {
                            let t = e(o);
                            if (t) {
                                i.push(t);
                                break
                            }
                        }
                        if (i.length >= 50 + r)
                            break
                    }
                }
                return function(e) {
                    if (!e.length)
                        return [];
                    let t = Array.from(e);
                    return /sentryWrapped/.test(e$(t).function || "") && t.pop(),
                        t.reverse(),
                    ek.test(e$(t).function || "") && (t.pop(),
                    ek.test(e$(t).function || "") && t.pop()),
                        t.slice(0, 50).map(e => ({
                            ...e,
                            filename: e.filename || e$(t).filename,
                            function: e.function || "?"
                        }))
                }(i.slice(r))
            }
        }
        function e$(e) {
            return e[e.length - 1] || {}
        }
        let eD = "<anonymous>";
        function eN(e) {
            try {
                if (!e || "function" != typeof e)
                    return eD;
                return e.name || eD
            } catch (e) {
                return eD
            }
        }
        function eT(e) {
            let t = e.exception;
            if (t) {
                let e = [];
                try {
                    return t.values.forEach(t => {
                            t.stacktrace.frames && e.push(...t.stacktrace.frames)
                        }
                    ),
                        e
                } catch (e) {}
            }
        }
        let eI = () => {
                let e;
                return {
                    name: "Dedupe",
                    processEvent(t) {
                        if (t.type)
                            return t;
                        try {
                            var n;
                            if ((n = e) && (function(e, t) {
                                let n = e.message
                                    , r = t.message;
                                return !!((n || r) && (!n || r) && (n || !r) && n === r && eC(e, t) && eP(e, t))
                            }(t, n) || function(e, t) {
                                let n = eR(t)
                                    , r = eR(e);
                                return !!(n && r && n.type === r.type && n.value === r.value && eC(e, t) && eP(e, t))
                            }(t, n)))
                                return K && m.warn("Event dropped due to being a duplicate of previously captured event."),
                                    null
                        } catch (e) {}
                        return e = t
                    }
                }
            }
        ;
        function eP(e, t) {
            let n = eT(e)
                , r = eT(t);
            if (!n && !r)
                return !0;
            if (n && !r || !n && r || r.length !== n.length)
                return !1;
            for (let e = 0; e < r.length; e++) {
                let t = r[e]
                    , i = n[e];
                if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function)
                    return !1
            }
            return !0
        }
        function eC(e, t) {
            let n = e.fingerprint
                , r = t.fingerprint;
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (e) {
                return !1
            }
        }
        function eR(e) {
            return e.exception && e.exception.values && e.exception.values[0]
        }
        let ej = "production";
        function eA(e, t=100, n=Infinity) {
            try {
                return function e(t, n, r=Infinity, i=Infinity, s=function() {
                    let e = "function" == typeof WeakSet
                        , t = e ? new WeakSet : [];
                    return [function(n) {
                        if (e)
                            return !!t.has(n) || (t.add(n),
                                !1);
                        for (let e = 0; e < t.length; e++)
                            if (t[e] === n)
                                return !0;
                        return t.push(n),
                            !1
                    }
                        , function(n) {
                            if (e)
                                t.delete(n);
                            else
                                for (let e = 0; e < t.length; e++)
                                    if (t[e] === n) {
                                        t.splice(e, 1);
                                        break
                                    }
                        }
                    ]
                }()) {
                    let[o,a] = s;
                    if (null == n || ["number", "boolean", "string"].includes(typeof n) && !Number.isNaN(n))
                        return n;
                    let c = function(e, t) {
                        try {
                            if ("domain" === e && t && "object" == typeof t && t._events)
                                return "[Domain]";
                            if ("domainEmitter" === e)
                                return "[DomainEmitter]";
                            if ("undefined" != typeof global && t === global)
                                return "[Global]";
                            if ("undefined" != typeof window && t === window)
                                return "[Window]";
                            if ("undefined" != typeof document && t === document)
                                return "[Document]";
                            if (T(t))
                                return "[VueViewModel]";
                            if (O(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t)
                                return "[SyntheticEvent]";
                            if ("number" == typeof t && t != t)
                                return "[NaN]";
                            if ("function" == typeof t)
                                return `[Function: ${eN(t)}]`;
                            if ("symbol" == typeof t)
                                return `[${String(t)}]`;
                            if ("bigint" == typeof t)
                                return `[BigInt: ${String(t)}]`;
                            let n = function(e) {
                                let t = Object.getPrototypeOf(e);
                                return t ? t.constructor.name : "null prototype"
                            }(t);
                            if (/^HTML(\w*)Element$/.test(n))
                                return `[HTMLElement: ${n}]`;
                            return `[object ${n}]`
                        } catch (e) {
                            return `**non-serializable** (${e})`
                        }
                    }(t, n);
                    if (!c.startsWith("[object "))
                        return c;
                    if (n.__sentry_skip_normalization__)
                        return n;
                    let u = "number" == typeof n.__sentry_override_normalization_depth__ ? n.__sentry_override_normalization_depth__ : r;
                    if (0 === u)
                        return c.replace("object ", "");
                    if (o(n))
                        return "[Circular ~]";
                    if (n && "function" == typeof n.toJSON)
                        try {
                            let t = n.toJSON();
                            return e("", t, u - 1, i, s)
                        } catch (e) {}
                    let l = Array.isArray(n) ? [] : {}
                        , p = 0
                        , d = U(n);
                    for (let t in d) {
                        if (!Object.prototype.hasOwnProperty.call(d, t))
                            continue;
                        if (p >= i) {
                            l[t] = "[MaxProperties ~]";
                            break
                        }
                        let n = d[t];
                        l[t] = e(t, n, u - 1, i, s),
                            p++
                    }
                    return a(n),
                        l
                }("", e, t, n)
            } catch (e) {
                return {
                    ERROR: `**non-serializable** (${e})`
                }
            }
        }
        function eL(e) {
            return new eU(t => {
                    t(e)
                }
            )
        }
        function eM(e) {
            return new eU( (t, n) => {
                    n(e)
                }
            )
        }
        (i = r || (r = {}))[i.PENDING = 0] = "PENDING",
            i[i.RESOLVED = 1] = "RESOLVED",
            i[i.REJECTED = 2] = "REJECTED";
        class eU {
            constructor(e) {
                eU.prototype.__init.call(this),
                    eU.prototype.__init2.call(this),
                    eU.prototype.__init3.call(this),
                    eU.prototype.__init4.call(this),
                    this._state = r.PENDING,
                    this._handlers = [];
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            then(e, t) {
                return new eU( (n, r) => {
                        this._handlers.push([!1, t => {
                            if (e)
                                try {
                                    n(e(t))
                                } catch (e) {
                                    r(e)
                                }
                            else
                                n(t)
                        }
                            , e => {
                                if (t)
                                    try {
                                        n(t(e))
                                    } catch (e) {
                                        r(e)
                                    }
                                else
                                    r(e)
                            }
                        ]),
                            this._executeHandlers()
                    }
                )
            }
            catch(e) {
                return this.then(e => e, e)
            }
            finally(e) {
                return new eU( (t, n) => {
                        let r, i;
                        return this.then(t => {
                                i = !1,
                                    r = t,
                                e && e()
                            }
                            , t => {
                                i = !0,
                                    r = t,
                                e && e()
                            }
                        ).then( () => {
                                if (i) {
                                    n(r);
                                    return
                                }
                                t(r)
                            }
                        )
                    }
                )
            }
            __init() {
                this._resolve = e => {
                    this._setResult(r.RESOLVED, e)
                }
            }
            __init2() {
                this._reject = e => {
                    this._setResult(r.REJECTED, e)
                }
            }
            __init3() {
                this._setResult = (e, t) => {
                    if (this._state === r.PENDING) {
                        if (D(t)) {
                            t.then(this._resolve, this._reject);
                            return
                        }
                        this._state = e,
                            this._value = t,
                            this._executeHandlers()
                    }
                }
            }
            __init4() {
                this._executeHandlers = () => {
                    if (this._state === r.PENDING)
                        return;
                    let e = this._handlers.slice();
                    this._handlers = [],
                        e.forEach(e => {
                                e[0] || (this._state === r.RESOLVED && e[1](this._value),
                                this._state === r.REJECTED && e[2](this._value),
                                    e[0] = !0)
                            }
                        )
                }
            }
        }
        let eq = /^sentry-/;
        function eF(e) {
            return e.split(",").map(e => e.split("=").map(e => decodeURIComponent(e.trim()))).reduce( (e, [t,n]) => (t && n && (e[t] = n),
                e), {})
        }
        function eY(e) {
            return "number" == typeof e ? eH(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? eH(e.getTime()) : ea()
        }
        function eH(e) {
            return e > 9999999999 ? e / 1e3 : e
        }
        function eB(e) {
            if ("function" == typeof e.getSpanJSON)
                return e.getSpanJSON();
            try {
                let {spanId: t, traceId: n} = e.spanContext();
                if (e.attributes && e.startTime && e.name && e.endTime && e.status) {
                    let {attributes: r, startTime: i, name: s, endTime: o, parentSpanId: a, status: c} = e;
                    return Y({
                        span_id: t,
                        trace_id: n,
                        data: r,
                        description: s,
                        parent_span_id: a,
                        start_timestamp: eY(i),
                        timestamp: eY(o) || void 0,
                        status: c && 0 !== c.code ? 1 === c.code ? "ok" : c.message || "unknown_error" : void 0,
                        op: r["sentry.op"],
                        origin: r["sentry.origin"],
                        _metrics_summary: function(e) {
                            let t = e._sentryMetrics;
                            if (!t)
                                return;
                            let n = {};
                            for (let[,[e,r]] of t)
                                (n[e] || (n[e] = [])).push(Y(r));
                            return n
                        }(e)
                    })
                }
                return {
                    span_id: t,
                    trace_id: n
                }
            } catch (e) {
                return {}
            }
        }
        function eG(e) {
            return e._sentryRootSpan || e
        }
        function eW(e, t) {
            let n = t.getOptions()
                , {publicKey: r} = t.getDsn() || {}
                , i = Y({
                environment: n.environment || ej,
                release: n.release,
                public_key: r,
                trace_id: e
            });
            return t.emit("createDsc", i),
                i
        }
        function eJ(e, t) {
            let {extra: n, tags: r, user: i, contexts: s, level: o, sdkProcessingMetadata: a, breadcrumbs: c, fingerprint: u, eventProcessors: l, attachments: p, propagationContext: d, transactionName: h, span: f} = t;
            ez(e, "extra", n),
                ez(e, "tags", r),
                ez(e, "user", i),
                ez(e, "contexts", s),
                ez(e, "sdkProcessingMetadata", a),
            o && (e.level = o),
            h && (e.transactionName = h),
            f && (e.span = f),
            c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
            u.length && (e.fingerprint = [...e.fingerprint, ...u]),
            l.length && (e.eventProcessors = [...e.eventProcessors, ...l]),
            p.length && (e.attachments = [...e.attachments, ...p]),
                e.propagationContext = {
                    ...e.propagationContext,
                    ...d
                }
        }
        function ez(e, t, n) {
            if (n && Object.keys(n).length)
                for (let r in e[t] = {
                    ...e[t]
                },
                    n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r])
        }
        let eV = new WeakMap;
        function eK(e, t) {
            return ev().captureEvent(e, t)
        }
        function eX(e) {
            let t = eb()
                , n = eE()
                , r = ev()
                , {release: i, environment: s=ej} = t && t.getOptions() || {}
                , {userAgent: o} = d.navigator || {}
                , a = function(e) {
                let t = ea()
                    , n = {
                    sid: H(),
                    init: !0,
                    timestamp: t,
                    started: t,
                    duration: 0,
                    status: "ok",
                    errors: 0,
                    ignoreDuration: !1,
                    toJSON: () => Y({
                        sid: `${n.sid}`,
                        init: n.init,
                        started: new Date(1e3 * n.started).toISOString(),
                        timestamp: new Date(1e3 * n.timestamp).toISOString(),
                        status: n.status,
                        errors: n.errors,
                        did: "number" == typeof n.did || "string" == typeof n.did ? `${n.did}` : void 0,
                        duration: n.duration,
                        abnormal_mechanism: n.abnormal_mechanism,
                        attrs: {
                            release: n.release,
                            environment: n.environment,
                            ip_address: n.ipAddress,
                            user_agent: n.userAgent
                        }
                    })
                };
                return e && ec(n, e),
                    n
            }({
                release: i,
                environment: s,
                user: r.getUser() || n.getUser(),
                ...o && {
                    userAgent: o
                },
                ...e
            })
                , c = n.getSession();
            return c && "ok" === c.status && ec(c, {
                status: "exited"
            }),
                eQ(),
                n.setSession(a),
                r.setSession(a),
                a
        }
        function eQ() {
            let e = eE()
                , t = ev()
                , n = t.getSession() || e.getSession();
            if (n) {
                let e;
                e = {},
                "ok" === n.status && (e = {
                    status: "exited"
                }),
                    ec(n, e)
            }
            eZ(),
                e.setSession(),
                t.setSession()
        }
        function eZ() {
            let e = eE()
                , t = ev()
                , n = eb()
                , r = t.getSession() || e.getSession();
            r && n && n.captureSession(r)
        }
        function e0(e=!1) {
            if (e) {
                eQ();
                return
            }
            eZ()
        }
        function e1() {
            if (!("fetch"in d))
                return !1;
            try {
                return new Headers,
                    new Request("http://www.example.com"),
                    new Response,
                    !0
            } catch (e) {
                return !1
            }
        }
        function e3(e) {
            return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        }
        let e2 = {}
            , e4 = {};
        function e5(e, t) {
            e2[e] = e2[e] || [],
                e2[e].push(t)
        }
        function e6(e, t) {
            e4[e] || (t(),
                e4[e] = !0)
        }
        function e9(e, t) {
            let n = e && e2[e];
            if (n)
                for (let r of n)
                    try {
                        r(t)
                    } catch (t) {
                        l && m.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${eN(r)}
Error:`, t)
                    }
        }
        function e8(e) {
            let t = "history";
            e5(t, e),
                e6(t, e7)
        }
        function e7() {
            if (!function() {
                let e = d.chrome
                    , t = e && e.app && e.app.runtime
                    , n = "history"in d && !!d.history.pushState && !!d.history.replaceState;
                return !t && n
            }())
                return;
            let e = d.onpopstate;
            function t(e) {
                return function(...t) {
                    let n = t.length > 2 ? t[2] : void 0;
                    if (n) {
                        let e = o
                            , t = String(n);
                        o = t,
                            e9("history", {
                                from: e,
                                to: t
                            })
                    }
                    return e.apply(this, t)
                }
            }
            d.onpopstate = function(...t) {
                let n = d.location.href
                    , r = o;
                if (o = n,
                    e9("history", {
                        from: r,
                        to: n
                    }),
                    e)
                    try {
                        return e.apply(this, t)
                    } catch (e) {}
            }
                ,
                j(d.history, "pushState", t),
                j(d.history, "replaceState", t)
        }
        let te = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function tt(e, t=!1) {
            let {host: n, path: r, pass: i, port: s, projectId: o, protocol: a, publicKey: c} = e;
            return `${a}://${c}${t && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r ? `${r}/` : r}${o}`
        }
        function tn(e) {
            return {
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            }
        }
        function tr(e, t=[]) {
            return [e, t]
        }
        function ti(e, t) {
            for (let n of e[1]) {
                let e = n[0].type;
                if (t(n, e))
                    return !0
            }
            return !1
        }
        function ts(e) {
            return d.__SENTRY__ && d.__SENTRY__.encodePolyfill ? d.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e)
        }
        let to = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            profile_chunk: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor",
            feedback: "feedback",
            span: "span",
            statsd: "metric_bucket"
        };
        function ta(e) {
            if (!e || !e.sdk)
                return;
            let {name: t, version: n} = e.sdk;
            return {
                name: t,
                version: n
            }
        }
        class tc extends Error {
            constructor(e, t="warn") {
                super(e),
                    this.message = e,
                    this.name = new.target.prototype.constructor.name,
                    Object.setPrototypeOf(this, new.target.prototype),
                    this.logLevel = t
            }
        }
        let tu = "Not capturing exception because it's already been captured.";
        class tl {
            constructor(e) {
                if (this._options = e,
                    this._integrations = {},
                    this._numProcessing = 0,
                    this._outcomes = {},
                    this._hooks = {},
                    this._eventProcessors = [],
                    e.dsn ? this._dsn = function(e) {
                        let t = "string" == typeof e ? function(e) {
                            let t = te.exec(e);
                            if (!t) {
                                g( () => {
                                        console.error(`Invalid Sentry Dsn: ${e}`)
                                    }
                                );
                                return
                            }
                            let[n,r,i="",s="",o="",a=""] = t.slice(1)
                                , c = ""
                                , u = a
                                , l = u.split("/");
                            if (l.length > 1 && (c = l.slice(0, -1).join("/"),
                                u = l.pop()),
                                u) {
                                let e = u.match(/^\d+/);
                                e && (u = e[0])
                            }
                            return tn({
                                host: s,
                                pass: i,
                                path: c,
                                projectId: u,
                                port: o,
                                protocol: n,
                                publicKey: r
                            })
                        }(e) : tn(e);
                        if (t && function(e) {
                            if (!l)
                                return !0;
                            let {port: t, projectId: n, protocol: r} = e;
                            return !["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (m.error(`Invalid Sentry Dsn: ${t} missing`),
                                !0)) && (n.match(/^\d+$/) ? "http" === r || "https" === r ? !(t && isNaN(parseInt(t, 10))) || (m.error(`Invalid Sentry Dsn: Invalid port ${t}`),
                                !1) : (m.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
                                !1) : (m.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                                !1))
                        }(t))
                            return t
                    }(e.dsn) : K && m.warn("No DSN provided, client will not send events."),
                    this._dsn) {
                    var t, n, r, i;
                    let s = (t = this._dsn,
                        n = e.tunnel,
                        r = e._metadata ? e._metadata.sdk : void 0,
                    n || `${function(e) {
                        let t = e.protocol ? `${e.protocol}:` : ""
                            , n = e.port ? `:${e.port}` : "";
                        return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
                    }(t)}${t.projectId}/envelope/?${Object.keys(i = {
                        sentry_key: t.publicKey,
                        sentry_version: "7",
                        ...r && {
                            sentry_client: `${r.name}/${r.version}`
                        }
                    }).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(i[e])}`).join("&")}`);
                    this._transport = e.transport({
                        tunnel: this._options.tunnel,
                        recordDroppedEvent: this.recordDroppedEvent.bind(this),
                        ...e.transportOptions,
                        url: s
                    })
                }
            }
            captureException(e, t, n) {
                let r = H();
                if (z(e))
                    return K && m.log(tu),
                        r;
                let i = {
                    event_id: r,
                    ...t
                };
                return this._process(this.eventFromException(e, i).then(e => this._captureEvent(e, i, n))),
                    i.event_id
            }
            captureMessage(e, t, n, r) {
                let i = {
                    event_id: H(),
                    ...n
                }
                    , s = w(e) ? e : String(e)
                    , o = k(e) ? this.eventFromMessage(s, t, i) : this.eventFromException(e, i);
                return this._process(o.then(e => this._captureEvent(e, i, r))),
                    i.event_id
            }
            captureEvent(e, t, n) {
                let r = H();
                if (t && t.originalException && z(t.originalException))
                    return K && m.log(tu),
                        r;
                let i = {
                    event_id: r,
                    ...t
                }
                    , s = (e.sdkProcessingMetadata || {}).capturedSpanScope;
                return this._process(this._captureEvent(e, i, s || n)),
                    i.event_id
            }
            captureSession(e) {
                "string" != typeof e.release ? K && m.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
                    ec(e, {
                        init: !1
                    }))
            }
            getDsn() {
                return this._dsn
            }
            getOptions() {
                return this._options
            }
            getSdkMetadata() {
                return this._options._metadata
            }
            getTransport() {
                return this._transport
            }
            flush(e) {
                let t = this._transport;
                return t ? (this.emit("flush"),
                    this._isClientDoneProcessing(e).then(n => t.flush(e).then(e => n && e))) : eL(!0)
            }
            close(e) {
                return this.flush(e).then(e => (this.getOptions().enabled = !1,
                    this.emit("close"),
                    e))
            }
            getEventProcessors() {
                return this._eventProcessors
            }
            addEventProcessor(e) {
                this._eventProcessors.push(e)
            }
            init() {
                (this._isEnabled() || this._options.integrations.some( ({name: e}) => e.startsWith("Spotlight"))) && this._setupIntegrations()
            }
            getIntegrationByName(e) {
                return this._integrations[e]
            }
            addIntegration(e) {
                let t = this._integrations[e.name];
                Z(this, e, this._integrations),
                t || Q(this, [e])
            }
            sendEvent(e, t={}) {
                this.emit("beforeSendEvent", e, t);
                let n = function(e, t, n, r) {
                    var i;
                    let s = ta(n)
                        , o = e.type && "replay_event" !== e.type ? e.type : "event";
                    (i = n && n.sdk) && (e.sdk = e.sdk || {},
                        e.sdk.name = e.sdk.name || i.name,
                        e.sdk.version = e.sdk.version || i.version,
                        e.sdk.integrations = [...e.sdk.integrations || [], ...i.integrations || []],
                        e.sdk.packages = [...e.sdk.packages || [], ...i.packages || []]);
                    let a = function(e, t, n, r) {
                        let i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                        return {
                            event_id: e.event_id,
                            sent_at: new Date().toISOString(),
                            ...t && {
                                sdk: t
                            },
                            ...!!n && r && {
                                dsn: tt(r)
                            },
                            ...i && {
                                trace: Y({
                                    ...i
                                })
                            }
                        }
                    }(e, s, r, t);
                    return delete e.sdkProcessingMetadata,
                        tr(a, [[{
                            type: o
                        }, e]])
                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (let e of t.attachments || [])
                    n = function(e, t) {
                        let[n,r] = e;
                        return [n, [...r, t]]
                    }(n, function(e) {
                        let t = "string" == typeof e.data ? ts(e.data) : e.data;
                        return [Y({
                            type: "attachment",
                            length: t.length,
                            filename: e.filename,
                            content_type: e.contentType,
                            attachment_type: e.attachmentType
                        }), t]
                    }(e));
                let r = this.sendEnvelope(n);
                r && r.then(t => this.emit("afterSendEvent", e, t), null)
            }
            sendSession(e) {
                let t = function(e, t, n, r) {
                    let i = ta(n);
                    return tr({
                        sent_at: new Date().toISOString(),
                        ...i && {
                            sdk: i
                        },
                        ...!!r && t && {
                            dsn: tt(t)
                        }
                    }, ["aggregates"in e ? [{
                        type: "sessions"
                    }, e] : [{
                        type: "session"
                    }, e.toJSON()]])
                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                this.sendEnvelope(t)
            }
            recordDroppedEvent(e, t, n) {
                if (this._options.sendClientReports) {
                    let r = "number" == typeof n ? n : 1
                        , i = `${e}:${t}`;
                    K && m.log(`Recording outcome: "${i}"${r > 1 ? ` (${r} times)` : ""}`),
                        this._outcomes[i] = (this._outcomes[i] || 0) + r
                }
            }
            on(e, t) {
                let n = this._hooks[e] = this._hooks[e] || [];
                return n.push(t),
                    () => {
                        let e = n.indexOf(t);
                        e > -1 && n.splice(e, 1)
                    }
            }
            emit(e, ...t) {
                let n = this._hooks[e];
                n && n.forEach(e => e(...t))
            }
            sendEnvelope(e) {
                return (this.emit("beforeEnvelope", e),
                this._isEnabled() && this._transport) ? this._transport.send(e).then(null, e => (K && m.error("Error while sending event:", e),
                    e)) : (K && m.error("Transport disabled"),
                    eL({}))
            }
            _setupIntegrations() {
                let {integrations: e} = this._options;
                this._integrations = function(e, t) {
                    let n = {};
                    return t.forEach(t => {
                            t && Z(e, t, n)
                        }
                    ),
                        n
                }(this, e),
                    Q(this, e)
            }
            _updateSessionFromEvent(e, t) {
                let n = !1
                    , r = !1
                    , i = t.exception && t.exception.values;
                if (i)
                    for (let e of (r = !0,
                        i)) {
                        let t = e.mechanism;
                        if (t && !1 === t.handled) {
                            n = !0;
                            break
                        }
                    }
                let s = "ok" === e.status;
                (s && 0 === e.errors || s && n) && (ec(e, {
                    ...n && {
                        status: "crashed"
                    },
                    errors: e.errors || Number(r || n)
                }),
                    this.captureSession(e))
            }
            _isClientDoneProcessing(e) {
                return new eU(t => {
                        let n = 0
                            , r = setInterval( () => {
                                0 == this._numProcessing ? (clearInterval(r),
                                    t(!0)) : (n += 1,
                                e && n >= e && (clearInterval(r),
                                    t(!1)))
                            }
                            , 1)
                    }
                )
            }
            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._transport
            }
            _prepareEvent(e, t, n, r=eE()) {
                let i = this.getOptions()
                    , s = Object.keys(this._integrations);
                return !t.integrations && s.length > 0 && (t.integrations = s),
                    this.emit("preprocessEvent", e, t),
                e.type || r.setLastEventId(e.event_id || t.event_id),
                    (function(e, t, n, r, i, s) {
                            let {normalizeDepth: o=3, normalizeMaxBreadth: a=1e3} = e
                                , c = {
                                ...t,
                                event_id: t.event_id || n.event_id || H(),
                                timestamp: t.timestamp || eo()
                            }
                                , u = n.integrations || e.integrations.map(e => e.name);
                            (function(e, t) {
                                    let {environment: n, release: r, dist: i, maxValueLength: s=250} = t;
                                    "environment"in e || (e.environment = "environment"in t ? n : ej),
                                    void 0 === e.release && void 0 !== r && (e.release = r),
                                    void 0 === e.dist && void 0 !== i && (e.dist = i),
                                    e.message && (e.message = P(e.message, s));
                                    let o = e.exception && e.exception.values && e.exception.values[0];
                                    o && o.value && (o.value = P(o.value, s));
                                    let a = e.request;
                                    a && a.url && (a.url = P(a.url, s))
                                }
                            )(c, e),
                            u.length > 0 && (c.sdk = c.sdk || {},
                                c.sdk.integrations = [...c.sdk.integrations || [], ...u]),
                            i && i.emit("applyFrameMetadata", t),
                            void 0 === t.type && function(e, t) {
                                let n;
                                let r = d._sentryDebugIds;
                                if (!r)
                                    return;
                                let i = eV.get(t);
                                i ? n = i : (n = new Map,
                                    eV.set(t, n));
                                let s = Object.entries(r).reduce( (e, [r,i]) => {
                                        let s;
                                        let o = n.get(r);
                                        o ? s = o : (s = t(r),
                                            n.set(r, s));
                                        for (let t = s.length - 1; t >= 0; t--) {
                                            let n = s[t];
                                            if (n.filename) {
                                                e[n.filename] = i;
                                                break
                                            }
                                        }
                                        return e
                                    }
                                    , {});
                                try {
                                    e.exception.values.forEach(e => {
                                            e.stacktrace.frames.forEach(e => {
                                                    e.filename && (e.debug_id = s[e.filename])
                                                }
                                            )
                                        }
                                    )
                                } catch (e) {}
                            }(c, e.stackParser);
                            let l = function(e, t) {
                                if (!t)
                                    return e;
                                let n = e ? e.clone() : new ed;
                                return n.update(t),
                                    n
                            }(r, n.captureContext);
                            n.mechanism && J(c, n.mechanism);
                            let p = i ? i.getEventProcessors() : []
                                , f = h("globalScope", () => new ed).getScopeData();
                            s && eJ(f, s.getScopeData()),
                            l && eJ(f, l.getScopeData());
                            let _ = [...n.attachments || [], ...f.attachments];
                            return _.length && (n.attachments = _),
                                function(e, t) {
                                    let {fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: s} = t;
                                    (function(e, t) {
                                            let {extra: n, tags: r, user: i, contexts: s, level: o, transactionName: a} = t
                                                , c = Y(n);
                                            c && Object.keys(c).length && (e.extra = {
                                                ...c,
                                                ...e.extra
                                            });
                                            let u = Y(r);
                                            u && Object.keys(u).length && (e.tags = {
                                                ...u,
                                                ...e.tags
                                            });
                                            let l = Y(i);
                                            l && Object.keys(l).length && (e.user = {
                                                ...l,
                                                ...e.user
                                            });
                                            let p = Y(s);
                                            p && Object.keys(p).length && (e.contexts = {
                                                ...p,
                                                ...e.contexts
                                            }),
                                            o && (e.level = o),
                                            a && "transaction" !== e.type && (e.transaction = a)
                                        }
                                    )(e, t),
                                    r && function(e, t) {
                                        e.contexts = {
                                            trace: function(e) {
                                                let {spanId: t, traceId: n} = e.spanContext()
                                                    , {parent_span_id: r} = eB(e);
                                                return Y({
                                                    parent_span_id: r,
                                                    span_id: t,
                                                    trace_id: n
                                                })
                                            }(t),
                                            ...e.contexts
                                        },
                                            e.sdkProcessingMetadata = {
                                                dynamicSamplingContext: function(e) {
                                                    let t = eb();
                                                    if (!t)
                                                        return {};
                                                    let n = eW(eB(e).trace_id || "", t)
                                                        , r = eG(e)
                                                        , i = r._frozenDsc;
                                                    if (i)
                                                        return i;
                                                    let s = r.spanContext().traceState
                                                        , o = s && s.get("sentry.dsc")
                                                        , a = o && function(e) {
                                                        let t = e && (x(e) || Array.isArray(e)) ? Array.isArray(e) ? e.reduce( (e, t) => (Object.entries(eF(t)).forEach( ([t,n]) => {
                                                                e[t] = n
                                                            }
                                                        ),
                                                            e), {}) : eF(e) : void 0;
                                                        if (!t)
                                                            return;
                                                        let n = Object.entries(t).reduce( (e, [t,n]) => (t.match(eq) && (e[t.slice("sentry-".length)] = n),
                                                            e), {});
                                                        return Object.keys(n).length > 0 ? n : void 0
                                                    }(o);
                                                    if (a)
                                                        return a;
                                                    let c = eB(r)
                                                        , u = c.data || {}
                                                        , l = u["sentry.sample_rate"];
                                                    null != l && (n.sample_rate = `${l}`);
                                                    let p = u["sentry.source"]
                                                        , d = c.description;
                                                    return "url" !== p && d && (n.transaction = d),
                                                        n.sampled = String(function(e) {
                                                            let {traceFlags: t} = e.spanContext();
                                                            return 1 === t
                                                        }(r)),
                                                        t.emit("createDsc", n, r),
                                                        n
                                                }(t),
                                                ...e.sdkProcessingMetadata
                                            };
                                        let n = eB(eG(t)).description;
                                        n && !e.transaction && "transaction" === e.type && (e.transaction = n)
                                    }(e, r),
                                        e.fingerprint = e.fingerprint ? V(e.fingerprint) : [],
                                    n && (e.fingerprint = e.fingerprint.concat(n)),
                                    e.fingerprint && !e.fingerprint.length && delete e.fingerprint,
                                        function(e, t) {
                                            let n = [...e.breadcrumbs || [], ...t];
                                            e.breadcrumbs = n.length ? n : void 0
                                        }(e, i),
                                        e.sdkProcessingMetadata = {
                                            ...e.sdkProcessingMetadata,
                                            ...s
                                        }
                                }(c, f),
                                (function e(t, n, r, i=0) {
                                        return new eU( (s, o) => {
                                                let a = t[i];
                                                if (null === n || "function" != typeof a)
                                                    s(n);
                                                else {
                                                    let c = a({
                                                        ...n
                                                    }, r);
                                                    K && a.id && null === c && m.log(`Event processor "${a.id}" dropped event`),
                                                        D(c) ? c.then(n => e(t, n, r, i + 1).then(s)).then(null, o) : e(t, c, r, i + 1).then(s).then(null, o)
                                                }
                                            }
                                        )
                                    }
                                )([...p, ...f.eventProcessors], c, n).then(e => (e && function(e) {
                                    let t = {};
                                    try {
                                        e.exception.values.forEach(e => {
                                                e.stacktrace.frames.forEach(e => {
                                                        e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id),
                                                            delete e.debug_id)
                                                    }
                                                )
                                            }
                                        )
                                    } catch (e) {}
                                    if (0 === Object.keys(t).length)
                                        return;
                                    e.debug_meta = e.debug_meta || {},
                                        e.debug_meta.images = e.debug_meta.images || [];
                                    let n = e.debug_meta.images;
                                    Object.entries(t).forEach( ([e,t]) => {
                                            n.push({
                                                type: "sourcemap",
                                                code_file: e,
                                                debug_id: t
                                            })
                                        }
                                    )
                                }(e),
                                "number" == typeof o && o > 0) ? function(e, t, n) {
                                    if (!e)
                                        return null;
                                    let r = {
                                        ...e,
                                        ...e.breadcrumbs && {
                                            breadcrumbs: e.breadcrumbs.map(e => ({
                                                ...e,
                                                ...e.data && {
                                                    data: eA(e.data, t, n)
                                                }
                                            }))
                                        },
                                        ...e.user && {
                                            user: eA(e.user, t, n)
                                        },
                                        ...e.contexts && {
                                            contexts: eA(e.contexts, t, n)
                                        },
                                        ...e.extra && {
                                            extra: eA(e.extra, t, n)
                                        }
                                    };
                                    return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
                                    e.contexts.trace.data && (r.contexts.trace.data = eA(e.contexts.trace.data, t, n))),
                                    e.spans && (r.spans = e.spans.map(e => ({
                                        ...e,
                                        ...e.data && {
                                            data: eA(e.data, t, n)
                                        }
                                    }))),
                                        r
                                }(e, o, a) : e)
                        }
                    )(i, e, t, n, this, r).then(e => {
                            if (null === e)
                                return e;
                            let t = {
                                ...r.getPropagationContext(),
                                ...n ? n.getPropagationContext() : void 0
                            };
                            if (!(e.contexts && e.contexts.trace) && t) {
                                let {traceId: n, spanId: r, parentSpanId: i, dsc: s} = t;
                                e.contexts = {
                                    trace: Y({
                                        trace_id: n,
                                        span_id: r,
                                        parent_span_id: i
                                    }),
                                    ...e.contexts
                                };
                                let o = s || eW(n, this);
                                e.sdkProcessingMetadata = {
                                    dynamicSamplingContext: o,
                                    ...e.sdkProcessingMetadata
                                }
                            }
                            return e
                        }
                    )
            }
            _captureEvent(e, t={}, n) {
                return this._processEvent(e, t, n).then(e => e.event_id, e => {
                        K && ("log" === e.logLevel ? m.log(e.message) : m.warn(e))
                    }
                )
            }
            _processEvent(e, t, n) {
                let r = this.getOptions()
                    , {sampleRate: i} = r
                    , s = td(e)
                    , o = tp(e)
                    , a = e.type || "error"
                    , c = `before send for type \`${a}\``
                    , u = void 0 === i ? void 0 : function(e) {
                    if ("boolean" == typeof e)
                        return Number(e);
                    let t = "string" == typeof e ? parseFloat(e) : e;
                    if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) {
                        K && m.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`);
                        return
                    }
                    return t
                }(i);
                if (o && "number" == typeof u && Math.random() > u)
                    return this.recordDroppedEvent("sample_rate", "error", e),
                        eM(new tc(`Discarding event because it's not included in the random sample (sampling rate = ${i})`,"log"));
                let l = "replay_event" === a ? "replay" : a
                    , p = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                return this._prepareEvent(e, t, n, p).then(n => {
                        if (null === n)
                            throw this.recordDroppedEvent("event_processor", l, e),
                                new tc("An event processor returned `null`, will not send event.","log");
                        return t.data && !0 === t.data.__sentry__ ? n : function(e, t) {
                            let n = `${t} must return \`null\` or a valid event.`;
                            if (D(e))
                                return e.then(e => {
                                        if (!O(e) && null !== e)
                                            throw new tc(n);
                                        return e
                                    }
                                    , e => {
                                        throw new tc(`${t} rejected with ${e}`)
                                    }
                                );
                            if (!O(e) && null !== e)
                                throw new tc(n);
                            return e
                        }(function(e, t, n, r) {
                            let {beforeSend: i, beforeSendTransaction: s, beforeSendSpan: o} = t;
                            if (tp(n) && i)
                                return i(n, r);
                            if (td(n)) {
                                if (n.spans && o) {
                                    let t = [];
                                    for (let r of n.spans) {
                                        let n = o(r);
                                        n ? t.push(n) : e.recordDroppedEvent("before_send", "span")
                                    }
                                    n.spans = t
                                }
                                if (s) {
                                    if (n.spans) {
                                        let e = n.spans.length;
                                        n.sdkProcessingMetadata = {
                                            ...n.sdkProcessingMetadata,
                                            spanCountBeforeProcessing: e
                                        }
                                    }
                                    return s(n, r)
                                }
                            }
                            return n
                        }(this, r, n, t), c)
                    }
                ).then(r => {
                        if (null === r) {
                            if (this.recordDroppedEvent("before_send", l, e),
                                s) {
                                let t = 1 + (e.spans || []).length;
                                this.recordDroppedEvent("before_send", "span", t)
                            }
                            throw new tc(`${c} returned \`null\`, will not send event.`,"log")
                        }
                        let i = n && n.getSession();
                        if (!s && i && this._updateSessionFromEvent(i, r),
                            s) {
                            let e = (r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r.spans ? r.spans.length : 0);
                            e > 0 && this.recordDroppedEvent("before_send", "span", e)
                        }
                        let o = r.transaction_info;
                        return s && o && r.transaction !== e.transaction && (r.transaction_info = {
                            ...o,
                            source: "custom"
                        }),
                            this.sendEvent(r, t),
                            r
                    }
                ).then(null, e => {
                        if (e instanceof tc)
                            throw e;
                        throw this.captureException(e, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: e
                        }),
                            new tc(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`)
                    }
                )
            }
            _process(e) {
                this._numProcessing++,
                    e.then(e => (this._numProcessing--,
                        e), e => (this._numProcessing--,
                        e))
            }
            _clearOutcomes() {
                let e = this._outcomes;
                return this._outcomes = {},
                    Object.entries(e).map( ([e,t]) => {
                            let[n,r] = e.split(":");
                            return {
                                reason: n,
                                category: r,
                                quantity: t
                            }
                        }
                    )
            }
            _flushOutcomes() {
                var e;
                K && m.log("Flushing outcomes...");
                let t = this._clearOutcomes();
                if (0 === t.length) {
                    K && m.log("No outcomes to send");
                    return
                }
                if (!this._dsn) {
                    K && m.log("No dsn provided, will not send outcomes");
                    return
                }
                K && m.log("Sending outcomes:", t);
                let n = tr((e = this._options.tunnel && tt(this._dsn)) ? {
                    dsn: e
                } : {}, [[{
                    type: "client_report"
                }, {
                    timestamp: eo(),
                    discarded_events: t
                }]]);
                this.sendEnvelope(n)
            }
        }
        function tp(e) {
            return void 0 === e.type
        }
        function td(e) {
            return "transaction" === e.type
        }
        let th = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function tf(e, t) {
            let n = tg(e, t)
                , r = {
                type: t && t.name,
                value: function(e) {
                    let t = e && e.message;
                    return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
                }(t)
            };
            return n.length && (r.stacktrace = {
                frames: n
            }),
            void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
                r
        }
        function t_(e, t) {
            return {
                exception: {
                    values: [tf(e, t)]
                }
            }
        }
        function tg(e, t) {
            let n = t.stacktrace || t.stack || ""
                , r = t && tm.test(t.message) ? 1 : 0
                , i = "number" == typeof t.framesToPop ? t.framesToPop : 0;
            try {
                return e(n, r, i)
            } catch (e) {}
            return []
        }
        let tm = /Minified React error #\d+;/i;
        function ty(e, t, n, r, i) {
            let s;
            if (b(t) && t.error)
                return t_(e, t.error);
            if (S(t) || E(t, "DOMException")) {
                if ("stack"in t)
                    s = t_(e, t);
                else {
                    let i = t.name || (S(t) ? "DOMError" : "DOMException")
                        , o = t.message ? `${i}: ${t.message}` : i;
                    W(s = tv(e, o, n, r), o)
                }
                return "code"in t && (s.tags = {
                    ...s.tags,
                    "DOMException.code": `${t.code}`
                }),
                    s
            }
            return v(t) ? t_(e, t) : (O(t) || $(t) ? J(s = function(e, t, n, r) {
                let i = eb()
                    , s = i && i.getOptions().normalizeDepth
                    , o = function(e) {
                    for (let t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                            let n = e[t];
                            if (n instanceof Error)
                                return n
                        }
                }(t)
                    , a = {
                    __serialized__: function e(t, n=3, r=102400) {
                        let i = eA(t, n);
                        return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i
                    }(t, s)
                };
                if (o)
                    return {
                        exception: {
                            values: [tf(e, o)]
                        },
                        extra: a
                    };
                let c = {
                    exception: {
                        values: [{
                            type: $(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                            value: function(e, {isUnhandledRejection: t}) {
                                let n = function(e, t=40) {
                                    let n = Object.keys(U(e));
                                    n.sort();
                                    let r = n[0];
                                    if (!r)
                                        return "[object has no keys]";
                                    if (r.length >= t)
                                        return P(r, t);
                                    for (let e = n.length; e > 0; e--) {
                                        let r = n.slice(0, e).join(", ");
                                        if (!(r.length > t)) {
                                            if (e === n.length)
                                                return r;
                                            return P(r, t)
                                        }
                                    }
                                    return ""
                                }(e)
                                    , r = t ? "promise rejection" : "exception";
                                if (b(e))
                                    return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                                if ($(e)) {
                                    let t = function(e) {
                                        try {
                                            let t = Object.getPrototypeOf(e);
                                            return t ? t.constructor.name : void 0
                                        } catch (e) {}
                                    }(e);
                                    return `Event \`${t}\` (type=${e.type}) captured as ${r}`
                                }
                                return `Object captured as ${r} with keys: ${n}`
                            }(t, {
                                isUnhandledRejection: r
                            })
                        }]
                    },
                    extra: a
                };
                if (n) {
                    let t = tg(e, n);
                    t.length && (c.exception.values[0].stacktrace = {
                        frames: t
                    })
                }
                return c
            }(e, t, n, i), {
                synthetic: !0
            }) : (W(s = tv(e, t, n, r), `${t}`, void 0),
                J(s, {
                    synthetic: !0
                })),
                s)
        }
        function tv(e, t, n, r) {
            let i = {};
            if (r && n) {
                let r = tg(e, n);
                r.length && (i.exception = {
                    values: [{
                        value: t,
                        stacktrace: {
                            frames: r
                        }
                    }]
                })
            }
            if (w(t)) {
                let {__sentry_template_string__: e, __sentry_template_values__: n} = t;
                return i.logentry = {
                    message: e,
                    params: n
                },
                    i
            }
            return i.message = t,
                i
        }
        let tE = 0;
        function tb(e, t={}, n) {
            if ("function" != typeof e)
                return e;
            try {
                let t = e.__sentry_wrapped__;
                if (t)
                    return t;
                if (M(e))
                    return e
            } catch (t) {
                return e
            }
            let r = function() {
                let r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    let i = r.map(e => tb(e, t));
                    return e.apply(this, i)
                } catch (e) {
                    throw tE++,
                        setTimeout( () => {
                                tE--
                            }
                        ),
                        !function(...e) {
                            let t = ey(er());
                            if (2 === e.length) {
                                let[n,r] = e;
                                return n ? t.withSetScope(n, r) : t.withScope(r)
                            }
                            t.withScope(e[0])
                        }(n => {
                                n.addEventProcessor(e => (t.mechanism && (W(e, void 0, void 0),
                                    J(e, t.mechanism)),
                                    e.extra = {
                                        ...e.extra,
                                        arguments: r
                                    },
                                    e)),
                                    ev().captureException(e, void 0)
                            }
                        ),
                        e
                }
            };
            try {
                for (let t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
            } catch (e) {}
            L(r, e),
                A(e, "__sentry_wrapped__", r);
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                    get: () => e.name
                })
            } catch (e) {}
            return r
        }
        class tS extends tl {
            constructor(e) {
                let t = {
                    parentSpanIsAlwaysRootSpan: !0,
                    ...e
                };
                !function(e, t, n=[t], r="npm") {
                    let i = e._metadata || {};
                    i.sdk || (i.sdk = {
                        name: `sentry.javascript.${t}`,
                        packages: n.map(e => ({
                            name: `${r}:@sentry/${e}`,
                            version: p
                        })),
                        version: p
                    }),
                        e._metadata = i
                }(t, "browser", ["browser"], d.SENTRY_SDK_SOURCE || "npm"),
                    super(t),
                t.sendClientReports && d.document && d.document.addEventListener("visibilitychange", () => {
                        "hidden" === d.document.visibilityState && this._flushOutcomes()
                    }
                )
            }
            eventFromException(e, t) {
                return function(e, t, n, r) {
                    let i = ty(e, t, n && n.syntheticException || void 0, r);
                    return J(i),
                        i.level = "error",
                    n && n.event_id && (i.event_id = n.event_id),
                        eL(i)
                }(this._options.stackParser, e, t, this._options.attachStacktrace)
            }
            eventFromMessage(e, t="info", n) {
                return function(e, t, n="info", r, i) {
                    let s = tv(e, t, r && r.syntheticException || void 0, i);
                    return s.level = n,
                    r && r.event_id && (s.event_id = r.event_id),
                        eL(s)
                }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
            }
            captureUserFeedback(e) {
                if (!this._isEnabled()) {
                    th && m.warn("SDK not enabled, will not capture user feedback.");
                    return
                }
                let t = function(e, {metadata: t, tunnel: n, dsn: r}) {
                    return tr({
                        event_id: e.event_id,
                        sent_at: new Date().toISOString(),
                        ...t && t.sdk && {
                            sdk: {
                                name: t.sdk.name,
                                version: t.sdk.version
                            }
                        },
                        ...!!n && !!r && {
                            dsn: tt(r)
                        }
                    }, [[{
                        type: "user_report"
                    }, e]])
                }(e, {
                    metadata: this.getSdkMetadata(),
                    dsn: this.getDsn(),
                    tunnel: this.getOptions().tunnel
                });
                this.sendEnvelope(t)
            }
            _prepareEvent(e, t, n) {
                return e.platform = e.platform || "javascript",
                    super._prepareEvent(e, t, n)
            }
        }
        function tx() {
            if (!d.document)
                return;
            let e = e9.bind(null, "dom")
                , t = tw(e, !0);
            d.document.addEventListener("click", t, !1),
                d.document.addEventListener("keypress", t, !1),
                ["EventTarget", "Node"].forEach(t => {
                        let n = d[t] && d[t].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (j(n, "addEventListener", function(t) {
                            return function(n, r, i) {
                                if ("click" === n || "keypress" == n)
                                    try {
                                        let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}
                                            , s = r[n] = r[n] || {
                                            refCount: 0
                                        };
                                        if (!s.handler) {
                                            let r = tw(e);
                                            s.handler = r,
                                                t.call(this, n, r, i)
                                        }
                                        s.refCount++
                                    } catch (e) {}
                                return t.call(this, n, r, i)
                            }
                        }),
                            j(n, "removeEventListener", function(e) {
                                return function(t, n, r) {
                                    if ("click" === t || "keypress" == t)
                                        try {
                                            let n = this.__sentry_instrumentation_handlers__ || {}
                                                , i = n[t];
                                            i && (i.refCount--,
                                            i.refCount <= 0 && (e.call(this, t, i.handler, r),
                                                i.handler = void 0,
                                                delete n[t]),
                                            0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                                        } catch (e) {}
                                    return e.call(this, t, n, r)
                                }
                            }))
                    }
                )
        }
        function tw(e, t=!1) {
            return n => {
                if (!n || n._sentryCaptured)
                    return;
                let r = function(e) {
                    try {
                        return e.target
                    } catch (e) {
                        return null
                    }
                }(n);
                if ("keypress" === n.type && (!r || !r.tagName || "INPUT" !== r.tagName && "TEXTAREA" !== r.tagName && !r.isContentEditable))
                    return;
                A(n, "_sentryCaptured", !0),
                r && !r._sentryId && A(r, "_sentryId", H());
                let i = "keypress" === n.type ? "input" : n.type;
                !function(e) {
                    if (e.type !== c)
                        return !1;
                    try {
                        if (!e.target || e.target._sentryId !== u)
                            return !1
                    } catch (e) {}
                    return !0
                }(n) && (e({
                    event: n,
                    name: i,
                    global: t
                }),
                    c = n.type,
                    u = r ? r._sentryId : void 0),
                    clearTimeout(a),
                    a = d.setTimeout( () => {
                            u = void 0,
                                c = void 0
                        }
                        , 1e3)
            }
        }
        let tk = "__sentry_xhr_v3__";
        function tO() {
            if (!d.XMLHttpRequest)
                return;
            let e = XMLHttpRequest.prototype;
            j(e, "open", function(e) {
                return function(...t) {
                    let n = 1e3 * ea()
                        , r = x(t[0]) ? t[0].toUpperCase() : void 0
                        , i = function(e) {
                        if (x(e))
                            return e;
                        try {
                            return e.toString()
                        } catch (e) {}
                    }(t[1]);
                    if (!r || !i)
                        return e.apply(this, t);
                    this[tk] = {
                        method: r,
                        url: i,
                        request_headers: {}
                    },
                    "POST" === r && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                    let s = () => {
                            let e = this[tk];
                            if (e && 4 === this.readyState) {
                                try {
                                    e.status_code = this.status
                                } catch (e) {}
                                e9("xhr", {
                                    endTimestamp: 1e3 * ea(),
                                    startTimestamp: n,
                                    xhr: this
                                })
                            }
                        }
                    ;
                    return "onreadystatechange"in this && "function" == typeof this.onreadystatechange ? j(this, "onreadystatechange", function(e) {
                        return function(...t) {
                            return s(),
                                e.apply(this, t)
                        }
                    }) : this.addEventListener("readystatechange", s),
                        j(this, "setRequestHeader", function(e) {
                            return function(...t) {
                                let[n,r] = t
                                    , i = this[tk];
                                return i && x(n) && x(r) && (i.request_headers[n.toLowerCase()] = r),
                                    e.apply(this, t)
                            }
                        }),
                        e.apply(this, t)
                }
            }),
                j(e, "send", function(e) {
                    return function(...t) {
                        let n = this[tk];
                        return n && (void 0 !== t[0] && (n.body = t[0]),
                            e9("xhr", {
                                startTimestamp: 1e3 * ea(),
                                xhr: this
                            })),
                            e.apply(this, t)
                    }
                })
        }
        function t$(e, t) {
            let n = eb()
                , r = eE();
            if (!n)
                return;
            let {beforeBreadcrumb: i=null, maxBreadcrumbs: s=100} = n.getOptions();
            if (s <= 0)
                return;
            let o = {
                timestamp: eo(),
                ...e
            }
                , a = i ? g( () => i(o, t)) : o;
            null !== a && (n.emit && n.emit("beforeAddBreadcrumb", a, t),
                r.addBreadcrumb(a, s))
        }
        function tD() {
            "console"in d && f.forEach(function(e) {
                e in d.console && j(d.console, e, function(t) {
                    return _[e] = t,
                        function(...t) {
                            e9("console", {
                                args: t,
                                level: e
                            });
                            let n = _[e];
                            n && n.apply(d.console, t)
                        }
                })
            })
        }
        function tN(e, t) {
            return !!e && "object" == typeof e && !!e[t]
        }
        function tT(e) {
            return "string" == typeof e ? e : e ? tN(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
        }
        let tI = ["fatal", "error", "warning", "log", "info", "debug"];
        function tP(e) {
            if (!e)
                return {};
            let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t)
                return {};
            let n = t[6] || ""
                , r = t[8] || "";
            return {
                host: t[4],
                path: t[5],
                protocol: t[2],
                search: n,
                hash: r,
                relative: t[5] + n + r
            }
        }
        let tC = (e={}) => {
                let t = {
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0,
                    ...e
                };
                return {
                    name: "Breadcrumbs",
                    setup(e) {
                        var n;
                        t.console && function(e) {
                            let t = "console";
                            e5(t, e),
                                e6(t, tD)
                        }(function(t) {
                            var n;
                            if (eb() !== e)
                                return;
                            let r = {
                                category: "console",
                                data: {
                                    arguments: t.args,
                                    logger: "console"
                                },
                                level: "warn" === (n = t.level) ? "warning" : tI.includes(n) ? n : "log",
                                message: C(t.args, " ")
                            };
                            if ("assert" === t.level) {
                                if (!1 !== t.args[0])
                                    return;
                                r.message = `Assertion failed: ${C(t.args.slice(1), " ") || "console.assert"}`,
                                    r.data.arguments = t.args.slice(1)
                            }
                            t$(r, {
                                input: t.args,
                                level: t.level
                            })
                        }),
                        t.dom && (e5("dom", (n = t.dom,
                                function(t) {
                                    let r, i;
                                    if (eb() !== e)
                                        return;
                                    let s = "object" == typeof n ? n.serializeAttribute : void 0
                                        , o = "object" == typeof n && "number" == typeof n.maxStringLength ? n.maxStringLength : void 0;
                                    o && o > 1024 && (th && m.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`),
                                        o = 1024),
                                    "string" == typeof s && (s = [s]);
                                    try {
                                        let e = t.event
                                            , n = e && e.target ? e.target : e;
                                        r = I(n, {
                                            keyAttrs: s,
                                            maxStringLength: o
                                        }),
                                            i = function(e) {
                                                if (!d.HTMLElement)
                                                    return null;
                                                let t = e;
                                                for (let e = 0; e < 5 && t; e++) {
                                                    if (t instanceof HTMLElement) {
                                                        if (t.dataset.sentryComponent)
                                                            return t.dataset.sentryComponent;
                                                        if (t.dataset.sentryElement)
                                                            return t.dataset.sentryElement
                                                    }
                                                    t = t.parentNode
                                                }
                                                return null
                                            }(n)
                                    } catch (e) {
                                        r = "<unknown>"
                                    }
                                    if (0 === r.length)
                                        return;
                                    let a = {
                                        category: `ui.${t.name}`,
                                        message: r
                                    };
                                    i && (a.data = {
                                        "ui.component_name": i
                                    }),
                                        t$(a, {
                                            event: t.event,
                                            name: t.name,
                                            global: t.global
                                        })
                                }
                        )),
                            e6("dom", tx)),
                        t.xhr && (e5("xhr", function(t) {
                            if (eb() !== e)
                                return;
                            let {startTimestamp: n, endTimestamp: r} = t
                                , i = t.xhr[tk];
                            if (!n || !r || !i)
                                return;
                            let {method: s, url: o, status_code: a, body: c} = i;
                            t$({
                                category: "xhr",
                                data: {
                                    method: s,
                                    url: o,
                                    status_code: a
                                },
                                type: "http"
                            }, {
                                xhr: t.xhr,
                                input: c,
                                startTimestamp: n,
                                endTimestamp: r
                            })
                        }),
                            e6("xhr", tO)),
                        t.fetch && function(e, t) {
                            let n = "fetch";
                            e5(n, e),
                                e6(n, () => (function(e, t=!1) {
                                        (!t || function() {
                                            if ("string" == typeof EdgeRuntime)
                                                return !0;
                                            if (!e1())
                                                return !1;
                                            if (e3(d.fetch))
                                                return !0;
                                            let e = !1
                                                , t = d.document;
                                            if (t && "function" == typeof t.createElement)
                                                try {
                                                    let n = t.createElement("iframe");
                                                    n.hidden = !0,
                                                        t.head.appendChild(n),
                                                    n.contentWindow && n.contentWindow.fetch && (e = e3(n.contentWindow.fetch)),
                                                        t.head.removeChild(n)
                                                } catch (e) {
                                                    l && m.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                                                }
                                            return e
                                        }()) && j(d, "fetch", function(t) {
                                            return function(...n) {
                                                let {method: r, url: i} = function(e) {
                                                    if (0 === e.length)
                                                        return {
                                                            method: "GET",
                                                            url: ""
                                                        };
                                                    if (2 === e.length) {
                                                        let[t,n] = e;
                                                        return {
                                                            url: tT(t),
                                                            method: tN(n, "method") ? String(n.method).toUpperCase() : "GET"
                                                        }
                                                    }
                                                    let t = e[0];
                                                    return {
                                                        url: tT(t),
                                                        method: tN(t, "method") ? String(t.method).toUpperCase() : "GET"
                                                    }
                                                }(n)
                                                    , s = {
                                                    args: n,
                                                    fetchData: {
                                                        method: r,
                                                        url: i
                                                    },
                                                    startTimestamp: 1e3 * ea()
                                                };
                                                e || e9("fetch", {
                                                    ...s
                                                });
                                                let o = Error().stack;
                                                return t.apply(d, n).then(async t => (e ? e(t) : e9("fetch", {
                                                        ...s,
                                                        endTimestamp: 1e3 * ea(),
                                                        response: t
                                                    }),
                                                        t), e => {
                                                        throw e9("fetch", {
                                                            ...s,
                                                            endTimestamp: 1e3 * ea(),
                                                            error: e
                                                        }),
                                                        v(e) && void 0 === e.stack && (e.stack = o,
                                                            A(e, "framesToPop", 1)),
                                                            e
                                                    }
                                                )
                                            }
                                        })
                                    }
                                )(void 0, void 0))
                        }(function(t) {
                            if (eb() !== e)
                                return;
                            let {startTimestamp: n, endTimestamp: r} = t;
                            if (!(!r || t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method)) {
                                if (t.error)
                                    t$({
                                        category: "fetch",
                                        data: t.fetchData,
                                        level: "error",
                                        type: "http"
                                    }, {
                                        data: t.error,
                                        input: t.args,
                                        startTimestamp: n,
                                        endTimestamp: r
                                    });
                                else {
                                    let e = t.response;
                                    t$({
                                        category: "fetch",
                                        data: {
                                            ...t.fetchData,
                                            status_code: e && e.status
                                        },
                                        type: "http"
                                    }, {
                                        input: t.args,
                                        response: e,
                                        startTimestamp: n,
                                        endTimestamp: r
                                    })
                                }
                            }
                        }),
                        t.history && e8(function(t) {
                            if (eb() !== e)
                                return;
                            let n = t.from
                                , r = t.to
                                , i = tP(d.location.href)
                                , s = n ? tP(n) : void 0
                                , o = tP(r);
                            s && s.path || (s = i),
                            i.protocol === o.protocol && i.host === o.host && (r = o.relative),
                            i.protocol === s.protocol && i.host === s.host && (n = s.relative),
                                t$({
                                    category: "navigation",
                                    data: {
                                        from: n,
                                        to: r
                                    }
                                })
                        }),
                        t.sentry && e.on("beforeSendEvent", function(t) {
                            eb() === e && t$({
                                category: `sentry.${"transaction" === t.type ? "transaction" : "event"}`,
                                event_id: t.event_id,
                                level: t.level,
                                message: G(t)
                            }, {
                                event: t
                            })
                        })
                    }
                }
            }
            , tR = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
            , tj = (e={}) => {
                let t = {
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0,
                    ...e
                };
                return {
                    name: "BrowserApiErrors",
                    setupOnce() {
                        t.setTimeout && j(d, "setTimeout", tA),
                        t.setInterval && j(d, "setInterval", tA),
                        t.requestAnimationFrame && j(d, "requestAnimationFrame", tL),
                        t.XMLHttpRequest && "XMLHttpRequest"in d && j(XMLHttpRequest.prototype, "send", tM);
                        let e = t.eventTarget;
                        e && (Array.isArray(e) ? e : tR).forEach(tU)
                    }
                }
            }
        ;
        function tA(e) {
            return function(...t) {
                let n = t[0];
                return t[0] = tb(n, {
                    mechanism: {
                        data: {
                            function: eN(e)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }),
                    e.apply(this, t)
            }
        }
        function tL(e) {
            return function(t) {
                return e.apply(this, [tb(t, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: eN(e)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                })])
            }
        }
        function tM(e) {
            return function(...t) {
                let n = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
                        e in n && "function" == typeof n[e] && j(n, e, function(t) {
                            let n = {
                                mechanism: {
                                    data: {
                                        function: e,
                                        handler: eN(t)
                                    },
                                    handled: !1,
                                    type: "instrument"
                                }
                            }
                                , r = M(t);
                            return r && (n.mechanism.data.handler = eN(r)),
                                tb(t, n)
                        })
                    }
                ),
                    e.apply(this, t)
            }
        }
        function tU(e) {
            let t = d[e] && d[e].prototype;
            t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (j(t, "addEventListener", function(t) {
                return function(n, r, i) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = tb(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: eN(r),
                                    target: e
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }))
                    } catch (e) {}
                    return t.apply(this, [n, tb(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: eN(r),
                                target: e
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }), i])
                }
            }),
                j(t, "removeEventListener", function(e) {
                    return function(t, n, r) {
                        try {
                            let i = n && n.__sentry_wrapped__;
                            i && e.call(this, t, i, r)
                        } catch (e) {}
                        return e.call(this, t, n, r)
                    }
                }))
        }
        let tq = null;
        function tF() {
            tq = d.onerror,
                d.onerror = function(e, t, n, r, i) {
                    return e9("error", {
                        column: r,
                        error: i,
                        line: n,
                        msg: e,
                        url: t
                    }),
                    !!tq && !tq.__SENTRY_LOADER__ && tq.apply(this, arguments)
                }
                ,
                d.onerror.__SENTRY_INSTRUMENTED__ = !0
        }
        let tY = null;
        function tH() {
            tY = d.onunhandledrejection,
                d.onunhandledrejection = function(e) {
                    return e9("unhandledrejection", e),
                    !tY || !!tY.__SENTRY_LOADER__ || tY.apply(this, arguments)
                }
                ,
                d.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
        }
        let tB = (e={}) => {
                let t = {
                    onerror: !0,
                    onunhandledrejection: !0,
                    ...e
                };
                return {
                    name: "GlobalHandlers",
                    setupOnce() {
                        Error.stackTraceLimit = 50
                    },
                    setup(e) {
                        t.onerror && (function(e) {
                            let t = "error";
                            e5(t, e),
                                e6(t, tF)
                        }(t => {
                                let {stackParser: n, attachStacktrace: r} = tW();
                                if (eb() !== e || tE > 0)
                                    return;
                                let {msg: i, url: s, line: o, column: a, error: c} = t
                                    , u = function(e, t, n, r) {
                                    let i = e.exception = e.exception || {}
                                        , s = i.values = i.values || []
                                        , o = s[0] = s[0] || {}
                                        , a = o.stacktrace = o.stacktrace || {}
                                        , c = a.frames = a.frames || []
                                        , u = isNaN(parseInt(r, 10)) ? void 0 : r
                                        , l = isNaN(parseInt(n, 10)) ? void 0 : n
                                        , p = x(t) && t.length > 0 ? t : function() {
                                        try {
                                            return d.document.location.href
                                        } catch (e) {
                                            return ""
                                        }
                                    }();
                                    return 0 === c.length && c.push({
                                        colno: u,
                                        filename: p,
                                        function: "?",
                                        in_app: !0,
                                        lineno: l
                                    }),
                                        e
                                }(ty(n, c || i, void 0, r, !1), s, o, a);
                                u.level = "error",
                                    eK(u, {
                                        originalException: c,
                                        mechanism: {
                                            handled: !1,
                                            type: "onerror"
                                        }
                                    })
                            }
                        ),
                            tG("onerror")),
                        t.onunhandledrejection && (function(e) {
                            let t = "unhandledrejection";
                            e5(t, e),
                                e6(t, tH)
                        }(t => {
                                let {stackParser: n, attachStacktrace: r} = tW();
                                if (eb() !== e || tE > 0)
                                    return;
                                let i = function(e) {
                                    if (k(e))
                                        return e;
                                    try {
                                        if ("reason"in e)
                                            return e.reason;
                                        if ("detail"in e && "reason"in e.detail)
                                            return e.detail.reason
                                    } catch (e) {}
                                    return e
                                }(t)
                                    , s = k(i) ? {
                                    exception: {
                                        values: [{
                                            type: "UnhandledRejection",
                                            value: `Non-Error promise rejection captured with value: ${String(i)}`
                                        }]
                                    }
                                } : ty(n, i, void 0, r, !0);
                                s.level = "error",
                                    eK(s, {
                                        originalException: i,
                                        mechanism: {
                                            handled: !1,
                                            type: "onunhandledrejection"
                                        }
                                    })
                            }
                        ),
                            tG("onunhandledrejection"))
                    }
                }
            }
        ;
        function tG(e) {
            th && m.log(`Global Handler attached: ${e}`)
        }
        function tW() {
            let e = eb();
            return e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            }
        }
        let tJ = () => ({
            name: "HttpContext",
            preprocessEvent(e) {
                if (!d.navigator && !d.location && !d.document)
                    return;
                let t = e.request && e.request.url || d.location && d.location.href
                    , {referrer: n} = d.document || {}
                    , {userAgent: r} = d.navigator || {}
                    , i = {
                    ...e.request && e.request.headers,
                    ...n && {
                        Referer: n
                    },
                    ...r && {
                        "User-Agent": r
                    }
                }
                    , s = {
                    ...e.request,
                    ...t && {
                        url: t
                    },
                    headers: i
                };
                e.request = s
            }
        });
        function tz(e, t) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            },
                e.mechanism = {
                    ...e.mechanism,
                    ..."AggregateError" === e.type && {
                        is_exception_group: !0
                    },
                    exception_id: t
                }
        }
        function tV(e, t, n, r) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            },
                e.mechanism = {
                    ...e.mechanism,
                    type: "chained",
                    source: t,
                    exception_id: n,
                    parent_id: r
                }
        }
        let tK = (e={}) => {
                let t = e.limit || 5
                    , n = e.key || "cause";
                return {
                    name: "LinkedErrors",
                    preprocessEvent(e, r, i) {
                        let s = i.getOptions();
                        !function(e, t, n=250, r, i, s, o) {
                            if (!s.exception || !s.exception.values || !o || !N(o.originalException, Error))
                                return;
                            let a = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
                            a && (s.exception.values = (function e(t, n, r, i, s, o, a, c) {
                                    if (o.length >= r + 1)
                                        return o;
                                    let u = [...o];
                                    if (N(i[s], Error)) {
                                        tz(a, c);
                                        let o = t(n, i[s])
                                            , l = u.length;
                                        tV(o, s, l, c),
                                            u = e(t, n, r, i[s], s, [o, ...u], o, l)
                                    }
                                    return Array.isArray(i.errors) && i.errors.forEach( (i, o) => {
                                            if (N(i, Error)) {
                                                tz(a, c);
                                                let l = t(n, i)
                                                    , p = u.length;
                                                tV(l, `errors[${o}]`, p, c),
                                                    u = e(t, n, r, i, s, [l, ...u], l, p)
                                            }
                                        }
                                    ),
                                        u
                                }
                            )(e, t, i, o.originalException, r, s.exception.values, a, 0).map(e => (e.value && (e.value = P(e.value, n)),
                                e)))
                        }(tf, s.stackParser, s.maxValueLength, n, t, e, r)
                    }
                }
            }
        ;
        function tX(e, t, n, r) {
            let i = {
                filename: e,
                function: "<anonymous>" === t ? "?" : t,
                in_app: !0
            };
            return void 0 !== n && (i.lineno = n),
            void 0 !== r && (i.colno = r),
                i
        }
        let tQ = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
            , tZ = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
            , t0 = /\((\S*)(?::(\d+))(?::(\d+))\)/
            , t1 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
            , t3 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
            , t2 = eO([30, e => {
            let t = tQ.exec(e);
            if (t) {
                let[,e,n,r] = t;
                return tX(e, "?", +n, +r)
            }
            let n = tZ.exec(e);
            if (n) {
                if (n[2] && 0 === n[2].indexOf("eval")) {
                    let e = t0.exec(n[2]);
                    e && (n[2] = e[1],
                        n[3] = e[2],
                        n[4] = e[3])
                }
                let[e,t] = t4(n[1] || "?", n[2]);
                return tX(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
            }
        }
        ], [50, e => {
            let t = t1.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    let e = t3.exec(t[3]);
                    e && (t[1] = t[1] || "eval",
                        t[3] = e[1],
                        t[4] = e[2],
                        t[5] = "")
                }
                let e = t[3]
                    , n = t[1] || "?";
                return [n,e] = t4(n, e),
                    tX(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
            }
        }
        ])
            , t4 = (e, t) => {
            let n = -1 !== e.indexOf("safari-extension")
                , r = -1 !== e.indexOf("safari-web-extension");
            return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
        }
            , t5 = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
            , t6 = {};
        function t9(e, t) {
            if ("event" === t || "transaction" === t)
                return Array.isArray(e) ? e[1] : void 0
        }
        function t8(e, t=function(e) {
            let t = t6[e];
            if (t)
                return t;
            let n = d[e];
            if (e3(n))
                return t6[e] = n.bind(d);
            let r = d.document;
            if (r && "function" == typeof r.createElement)
                try {
                    let t = r.createElement("iframe");
                    t.hidden = !0,
                        r.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (n = i[e]),
                        r.head.removeChild(t)
                } catch (t) {
                    t5 && m.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t)
                }
            return n ? t6[e] = n.bind(d) : n
        }("fetch")) {
            let n = 0
                , r = 0;
            return function(e, t, n=function(e) {
                let t = [];
                function n(e) {
                    return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0)
                }
                return {
                    $: t,
                    add: function(r) {
                        if (!(void 0 === e || t.length < e))
                            return eM(new tc("Not adding Promise because buffer limit was reached."));
                        let i = r();
                        return -1 === t.indexOf(i) && t.push(i),
                            i.then( () => n(i)).then(null, () => n(i).then(null, () => {}
                            )),
                            i
                    },
                    drain: function(e) {
                        return new eU( (n, r) => {
                                let i = t.length;
                                if (!i)
                                    return n(!0);
                                let s = setTimeout( () => {
                                        e && e > 0 && n(!1)
                                    }
                                    , e);
                                t.forEach(e => {
                                        eL(e).then( () => {
                                                --i || (clearTimeout(s),
                                                    n(!0))
                                            }
                                            , r)
                                    }
                                )
                            }
                        )
                    }
                }
            }(e.bufferSize || 64)) {
                let r = {};
                return {
                    send: function(i) {
                        let s = [];
                        if (ti(i, (t, n) => {
                                let i = to[n];
                                if (function(e, t, n=Date.now()) {
                                    return (e[t] || e.all || 0) > n
                                }(r, i)) {
                                    let r = t9(t, n);
                                    e.recordDroppedEvent("ratelimit_backoff", i, r)
                                } else
                                    s.push(t)
                            }
                        ),
                        0 === s.length)
                            return eL({});
                        let o = tr(i[0], s)
                            , a = t => {
                                ti(o, (n, r) => {
                                        let i = t9(n, r);
                                        e.recordDroppedEvent(t, to[r], i)
                                    }
                                )
                            }
                        ;
                        return n.add( () => t({
                            body: function(e) {
                                let[t,n] = e
                                    , r = JSON.stringify(t);
                                function i(e) {
                                    "string" == typeof r ? r = "string" == typeof e ? r + e : [ts(r), e] : r.push("string" == typeof e ? ts(e) : e)
                                }
                                for (let e of n) {
                                    let[t,n] = e;
                                    if (i(`
${JSON.stringify(t)}
`),
                                    "string" == typeof n || n instanceof Uint8Array)
                                        i(n);
                                    else {
                                        let e;
                                        try {
                                            e = JSON.stringify(n)
                                        } catch (t) {
                                            e = JSON.stringify(eA(n))
                                        }
                                        i(e)
                                    }
                                }
                                return "string" == typeof r ? r : function(e) {
                                    let t = new Uint8Array(e.reduce( (e, t) => e + t.length, 0))
                                        , n = 0;
                                    for (let r of e)
                                        t.set(r, n),
                                            n += r.length;
                                    return t
                                }(r)
                            }(o)
                        }).then(e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && K && m.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                                r = function(e, {statusCode: t, headers: n}, r=Date.now()) {
                                    let i = {
                                        ...e
                                    }
                                        , s = n && n["x-sentry-rate-limits"]
                                        , o = n && n["retry-after"];
                                    if (s)
                                        for (let e of s.trim().split(",")) {
                                            let[t,n,,,s] = e.split(":", 5)
                                                , o = parseInt(t, 10)
                                                , a = (isNaN(o) ? 60 : o) * 1e3;
                                            if (n)
                                                for (let e of n.split(";"))
                                                    "metric_bucket" === e ? (!s || s.split(";").includes("custom")) && (i[e] = r + a) : i[e] = r + a;
                                            else
                                                i.all = r + a
                                        }
                                    else
                                        o ? i.all = r + function(e, t=Date.now()) {
                                            let n = parseInt(`${e}`, 10);
                                            if (!isNaN(n))
                                                return 1e3 * n;
                                            let r = Date.parse(`${e}`);
                                            return isNaN(r) ? 6e4 : r - t
                                        }(o, r) : 429 === t && (i.all = r + 6e4);
                                    return i
                                }(r, e),
                                e), e => {
                                throw a("network_error"),
                                    e
                            }
                        )).then(e => e, e => {
                                if (e instanceof tc)
                                    return K && m.error("Skipped sending event because buffer is full."),
                                        a("queue_overflow"),
                                        eL({});
                                throw e
                            }
                        )
                    },
                    flush: e => n.drain(e)
                }
            }(e, function(i) {
                let s = i.body.length;
                n += s,
                    r++;
                let o = {
                    body: i.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: e.headers,
                    keepalive: n <= 6e4 && r < 15,
                    ...e.fetchOptions
                };
                if (!t)
                    return t6.fetch = void 0,
                        eM("No fetch implementation available");
                try {
                    return t(e.url, o).then(e => (n -= s,
                        r--,
                        {
                            statusCode: e.status,
                            headers: {
                                "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": e.headers.get("Retry-After")
                            }
                        }))
                } catch (e) {
                    return t6.fetch = void 0,
                        n -= s,
                        r--,
                        eM(e)
                }
            })
        }
        function t7(e={}) {
            var t;
            let n = function(e={}) {
                let t = {
                    defaultIntegrations: [et(), ex(), tj(), tC(), tB(), tK(), eI(), tJ()],
                    release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : d.SENTRY_RELEASE && d.SENTRY_RELEASE.id ? d.SENTRY_RELEASE.id : void 0,
                    autoSessionTracking: !0,
                    sendClientReports: !0
                };
                return null == e.defaultIntegrations && delete e.defaultIntegrations,
                    {
                        ...t,
                        ...e
                    }
            }(e);
            if (function() {
                let e = void 0 !== d.window && d;
                if (!e)
                    return !1;
                let t = e.chrome ? "chrome" : "browser"
                    , n = e[t]
                    , r = n && n.runtime && n.runtime.id
                    , i = d.location && d.location.href || ""
                    , s = !!r && d === d.top && ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some(e => i.startsWith(`${e}//`))
                    , o = void 0 !== e.nw;
                return !!r && !s && !o
            }()) {
                g( () => {
                        console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
                    }
                );
                return
            }
            th && !e1() && m.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.");
            let r = function(e, t) {
                !0 === t.debug && (K ? m.enable() : g( () => {
                        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
                    }
                )),
                    ev().update(t.initialScope);
                let n = new e(t);
                return ev().setClient(n),
                    n.init(),
                    n
            }(tS, {
                ...n,
                stackParser: Array.isArray(t = n.stackParser || t2) ? eO(...t) : t,
                integrations: function(e) {
                    let t = e.defaultIntegrations || []
                        , n = e.integrations;
                    t.forEach(e => {
                            e.isDefaultInstance = !0
                        }
                    );
                    let r = function(e) {
                        let t = {};
                        return e.forEach(e => {
                                let {name: n} = e
                                    , r = t[n];
                                r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                            }
                        ),
                            Object.values(t)
                    }(Array.isArray(n) ? [...t, ...n] : "function" == typeof n ? V(n(t)) : t)
                        , i = r.findIndex(e => "Debug" === e.name);
                    if (i > -1) {
                        let[e] = r.splice(i, 1);
                        r.push(e)
                    }
                    return r
                }(n),
                transport: n.transport || t8
            });
            return n.autoSessionTracking && function() {
                if (void 0 === d.document) {
                    th && m.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                    return
                }
                eX({
                    ignoreDuration: !0
                }),
                    e0(),
                    e8( ({from: e, to: t}) => {
                            void 0 !== e && e !== t && (eX({
                                ignoreDuration: !0
                            }),
                                e0())
                        }
                    )
            }(),
                r
        }
    }
}]);
