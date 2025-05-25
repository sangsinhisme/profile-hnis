(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    3562: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 6008)),
            Promise.resolve().then(n.bind(n, 7028)),
            Promise.resolve().then(n.bind(n, 7248)),
            Promise.resolve().then(n.t.bind(n, 8173, 23))
    },
    6008: function(e, t, n) {
        "use strict";
        n.d(t, {
            default: function() {
                return c
            }
        });
        var r = n(9424)
            , o = n(2265);
        n(2956);
        let s = "ce15777ceea8485f99aeb944b412a4a5";
        function c() {
            return (0,
                o.useEffect)( () => {
                    localStorage.getItem(s) || localStorage.setItem(s, "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e => (+e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +e / 4).toString(16))),
                        r.S1({
                            debug: !0,
                            dsn: "https://26ef413522ea4fddb219471b6499d402@sentry.ngxson.com/5",
                            tracesSampleRate: .05,
                            autoSessionTracking: !1,
                            integrations: e => e.filter(e => "Breadcrumbs" !== e.name && "Dedupe" !== e.name)
                        })
                }
                , []),
                null
        }
    },
    7028: function(e, t, n) {
        "use strict";
        n.d(t, {
            default: function() {
                return s
            }
        });
        var r = n(7437)
            , o = n(2265);
        function s() {
            return (0,
                o.useEffect)( () => {
                    let e = .01 * window.screen.height;
                    document.documentElement.style.setProperty("--vh", "".concat(e, "px")),
                        window.addEventListener("resize", () => {
                                let e = .01 * window.screen.height;
                                document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
                            }
                        )
                }
                , []),
                (0,
                    r.jsx)("div", {
                    className: "bg-fixed-due-to-ios-not-supported"
                })
        }
    }
}, function(e) {
    e.O(0, [173, 424, 191, 971, 23, 744], function() {
        return e(e.s = 3562)
    }),
        _N_E = e.O()
}
]);
