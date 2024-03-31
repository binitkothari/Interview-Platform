(this.webpackJsonpcontext = this.webpackJsonpcontext || []).push([
  [0],
  {
    107: function (e, t) {},
    109: function (e, t) {},
    121: function (e, t, a) {},
    122: function (e, t, a) {},
    123: function (e, t, a) {},
    146: function (e, t) {},
    180: function (e, t, a) {},
    181: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        o = a(72),
        c = a.n(o),
        r = (a(82), a(2)),
        i = a(1),
        m = a(30),
        s = a.n(m);
      function d() {
        return l.a.createElement(
          "footer",
          { className: "page-footer font-small blue bg-dark text-white" },
          l.a.createElement(
            "div",
            { className: "footer-copyright text-center py-3" },
            "\xa9 2024 Copyright:",
            l.a.createElement(
              "a",
              {
                href: "https://github.com/binitkothari/Interview-Platform.git",
              },
              " Binit Kumar Kothari "
            )
          )
        );
      }
      function g() {
        return l.a.createElement(
          "nav",
          {
            className: "navbar navbar-expand-sm navbar-dark bg-dark fixed-top",
          },
          l.a.createElement(
            r.b,
            { to: "/", className: "navbar-brand" },
            "INTERVIEW WITH US"
          ),
          l.a.createElement(
            "button",
            {
              className: "navbar-toggler ml-auto",
              "data-toggle": "collapse",
              "data-target": "#navbarid",
            },
            l.a.createElement("span", { className: "navbar-toggler-icon" })
          ),
          l.a.createElement(
            "div",
            { className: "collapse navbar-collapse", id: "navbarid" },
            l.a.createElement(
              "ul",
              { className: "navbar-nav text-center ml-auto" },
              l.a.createElement(
                r.b,
                { to: "/" },
                l.a.createElement(
                  "li",
                  { className: "nav-item nav-link" },
                  "HOME"
                )
              ),
              l.a.createElement(
                r.b,
                { to: "/" },
                l.a.createElement(
                  "li",
                  { className: "nav-item nav-link" },
                  "ABOUT"
                )
              ),
              l.a.createElement(
                r.b,
                { to: "/" },
                l.a.createElement(
                  "li",
                  { className: "nav-item nav-link" },
                  "CONTACT"
                )
              )
            )
          )
        );
      }
      var u = a(76),
        p = a(11),
        v = a(12),
        E = a(15),
        A = a(14),
        h = Object(n.createContext)(),
        f = (function (e) {
          Object(E.a)(a, e);
          var t = Object(A.a)(a);
          function a() {
            var e;
            Object(p.a)(this, a);
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++)
              l[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(l))).state = {
                name: "Binit",
                schno: "171112031",
              }),
              e
            );
          }
          return (
            Object(v.a)(a, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    h.Provider,
                    { value: Object(u.a)({}, this.state) },
                    this.props.children
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      a(121);
      function b() {
        return l.a.createElement(
          "div",
          { className: "carousel slide", id: "slide", "data-ride": "carousel" },
          l.a.createElement(
            "div",
            { className: "carousel-inner" },
            l.a.createElement(
              "div",
              { className: "carousel-item text-center" },
              l.a.createElement("div", { className: "carousel-image-lg" }),
              l.a.createElement("img", {
                src: "images/videocall.png",
                alt: "VIDEOCALL",
              }),
              l.a.createElement(
                "div",
                { className: "carousel-caption" },
                l.a.createElement("h4", null, "Video Call Interview"),
                l.a.createElement(
                  "p",
                  null,
                  "Have a seemless virtual video call interview with our platform."
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: "carousel-item active" },
              l.a.createElement("div", { className: "carousel-image-lg" }),
              l.a.createElement("img", {
                src: "images/notepad.jpg",
                alt: "NOTEPAD",
              }),
              l.a.createElement(
                "div",
                { className: "carousel-caption" },
                l.a.createElement("h4", null, "Virtual Notepad"),
                l.a.createElement(
                  "p",
                  null,
                  "Now introducing virtual notepad. Share anything anytime with access to anyone you choose. Best suited to share and work together on same note."
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: "carousel-item" },
              l.a.createElement("div", { className: "carousel-image-lg" }),
              l.a.createElement("img", {
                src: "images/coding-gif.gif",
                alt: "CODING",
              }),
              l.a.createElement(
                "div",
                { className: "carousel-caption" },
                l.a.createElement("h4", null, "Code Live"),
                l.a.createElement(
                  "p",
                  null,
                  "Code live and crack interview. With this virtual codepad you can code live and test your code against the test cases provided by interviewer."
                )
              )
            )
          ),
          l.a.createElement(
            "ul",
            { className: "carousel-indicators" },
            l.a.createElement("li", {
              "data-target": "#slide",
              "data-slide-to": "0",
            }),
            l.a.createElement("li", {
              "data-target": "#slide",
              "data-slide-to": "1",
              className: "active",
            }),
            l.a.createElement("li", {
              "data-target": "#slide",
              "data-slide-to": "2",
            })
          ),
          l.a.createElement(
            "a",
            {
              href: "#slide",
              "data-slide": "prev",
              className: "carousel-control-prev",
            },
            l.a.createElement("span", {
              className: "carousel-control-prev-icon",
            })
          ),
          l.a.createElement(
            "a",
            {
              href: "#slide",
              "data-slide": "next",
              className: "carousel-control-next",
            },
            l.a.createElement("span", {
              className: "carousel-control-next-icon",
            })
          )
        );
      }
      a(122);
      function y() {
        return l.a.createElement(
          "div",
          { className: "col-lg-9 col-md-9 col-sm-12 col-12" },
          l.a.createElement(
            "div",
            { className: "row mr-0 pr-0" },
            l.a.createElement(
              "div",
              { className: "card mx-2 my-3" },
              l.a.createElement("img", {
                src: "images/videocall.png",
                className: "card-img",
                alt: "videocall",
              }),
              l.a.createElement(
                "div",
                { className: "card-body" },
                l.a.createElement(
                  "h6",
                  { className: "card-title text-center" },
                  "Video Call Interview"
                ),
                l.a.createElement(
                  "p",
                  { className: "card-text" },
                  "This platform boasts flawless video, crystal clear audio and instant sharing capabilities that make it our favorite option for video call interviews."
                ),
                l.a.createElement(
                  r.b,
                  { to: "/videocall" },
                  l.a.createElement(
                    "p",
                    { className: "btn btn-success m-auto d-block" },
                    "View"
                  )
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: "card mx-2 my-3" },
              l.a.createElement("img", {
                src: "images/coding-gif.gif",
                className: "card-img",
                alt: "coding",
              }),
              l.a.createElement(
                "div",
                { className: "card-body" },
                l.a.createElement(
                  "h6",
                  { className: "card-title text-center" },
                  "Live Codepad"
                ),
                l.a.createElement(
                  "p",
                  { className: "card-text" },
                  "Live codepad is an interview and screening tool designed to let candidates write programs that run. It\u2019s simple, fast, and remarkably powerful."
                ),
                l.a.createElement(
                  r.b,
                  { to: "/codepad" },
                  l.a.createElement(
                    "p",
                    { className: "btn btn-success m-auto d-block" },
                    "View"
                  )
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: "card mx-2 my-3" },
              l.a.createElement("img", {
                src: "images/notepad.jpg",
                className: "card-img",
                alt: "notepad",
              }),
              l.a.createElement(
                "div",
                { className: "card-body" },
                l.a.createElement(
                  "h6",
                  { className: "card-title text-center" },
                  "Live Notepad"
                ),
                l.a.createElement(
                  "p",
                  { className: "card-text" },
                  "Live notepad is your online notepad on the web. It allows you to store notes on the GO without having to Login. Best of all - anotepad is a fast, clean, simple to use and FREE online web notepad."
                ),
                l.a.createElement(
                  r.b,
                  { to: "/notepad" },
                  l.a.createElement(
                    "p",
                    { className: "btn btn-success m-auto d-block" },
                    "View"
                  )
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: "card mx-2 my-3" },
              l.a.createElement("img", {
                src: "images/video-note.png",
                className: "card-img",
                alt: "video-note",
              }),
              l.a.createElement(
                "div",
                { className: "card-body" },
                l.a.createElement(
                  "h6",
                  { className: "card-title text-center" },
                  "Video call and Notepad"
                ),
                l.a.createElement(
                  "p",
                  { className: "card-text" },
                  "Combining video call with live notepad makes the interview process much smooth and gives a flawless experience. With this option Virtual Interviews are no different than f2f interviews."
                ),
                l.a.createElement(
                  r.b,
                  { to: "/note-video" },
                  l.a.createElement(
                    "p",
                    { className: "btn btn-success m-auto d-block" },
                    "View"
                  )
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: "card mx-2 my-3" },
              l.a.createElement("img", {
                src: "images/powerhouse.jpg",
                className: "card-img",
                alt: "powerhouse",
              }),
              l.a.createElement(
                "div",
                { className: "card-body" },
                l.a.createElement(
                  "h6",
                  { className: "card-title text-center" },
                  "Powerhouse Interview"
                ),
                l.a.createElement(
                  "p",
                  { className: "card-text" },
                  "Perfect platform to take any kind of interviews. It includes every tool needed for online interviews, having features such as codepad, notepad video and audio call."
                ),
                l.a.createElement(
                  r.b,
                  { to: "/powerhouse" },
                  l.a.createElement(
                    "p",
                    { className: "btn btn-success m-auto d-block" },
                    "View"
                  )
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: "card mx-2 my-3" },
              l.a.createElement("img", {
                src: "images/code-video.png",
                className: "card-img",
                alt: "code-video",
              }),
              l.a.createElement(
                "div",
                { className: "card-body" },
                l.a.createElement(
                  "h6",
                  { className: "card-title text-center" },
                  "Codepad and Video Call"
                ),
                l.a.createElement(
                  "p",
                  { className: "card-text" },
                  "Code-debug-execute your logic with explaination in real time with this perfect blend of Codepad and Video call. It includes tools most suited for coding interviews."
                ),
                l.a.createElement(
                  r.b,
                  { to: "/code-video" },
                  l.a.createElement(
                    "p",
                    { className: "btn btn-success m-auto d-block" },
                    "View"
                  )
                )
              )
            )
          )
        );
      }
      function w() {
        return l.a.createElement(h.Consumer, null, function (e) {
          return l.a.createElement(
            "div",
            { className: "col-lg-3 col-md-3 col-sm-12 col-12 mt-5" },
            l.a.createElement(
              "div",
              { className: "box border-bottom" },
              l.a.createElement(
                "div",
                { className: "bg-primary text-center py-1 text-white" },
                "Connect with me"
              ),
              l.a.createElement(
                "div",
                { className: "bg-light px-2 py-3" },
                l.a.createElement(
                  "ul",
                  { className: "list-group list-group-flush" },
                  l.a.createElement(
                    "ul",
                    { className: "list-group" },
                    l.a.createElement(
                      "li",
                      { className: "list-group-item" },
                      l.a.createElement(
                        "a",
                        { className: "btn-floating btn-fb btn-sm", href: "/" },
                        l.a.createElement("img", {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADHUlEQVQ4ja2UXUhTYRjH/zvbzj7PNufmaalT05rRMoo+CCERLJAKoiy6KdAuCyIqpcAugqSgi7rIrgKxq6CIIkKEJIg+JFlWFqZpppvavo7b2dzZxzmnC+tsns3owufy+f+f3/s8L+/7AKscipUEc6nrqN5obSNNVrtSSVJ8mmNSiXgoGQv5EoHpnkSCffO/QI29etvj6t2HG4sr6rRyURR4+Cc98dmRl8Mx/4+uaMD7PFdXyvx6ev3OgS0HzjZS9gpVwQ4UBIzWUtJRW+9U68zNHBuiOTbYXxBY5HTf23ro/H7SYM4DiaII1j8FLjIHBaGCitSBsjt1BqujLhb4ucjFwu8AgJBaKyprrtq+v5nUm/JgCe8Q6PhbtO4rRfvJnTCGXklasdNtKK7cfAaABQCkscx02TnHxnqbHJaMhbGnrhjHjrdIObPZgmCOZ93ulurwzNdLjPdbx19gmdVZ5y50Z8ngOJrajgEA7vc+wLuPPyFqS2CwZD2kjoLe6tjBeL8tdWhaU9O21t3gKARUZuKw2pYafz00Dqq2uZANGn1RKQCFCgBIPeUidZRsVAaJaBApZk7KpRYjYL2fASUJyuFa5teabEYAFhUAaAxmu/zEtO8tzrYehI1ukHLXr11AkuPQfbcXGbjkJQqpQ0KpJuWqSGix0e2GUpV9jiU0vaSpjXkjL4Z8QQCMCgD4VDIiN6ht69HReQsaRQrXui4DAK503gCTVENhcECT4xX4DNjAjAeASABALDQ9EAt508vupKgcivJGRFNqKZcS1dBWNkBj37Ds8KnBJzNx//RV4M/Djv6aujM60PNe4DN5oxBE9rsLYp6MRWaenxsbfMhxkUkJCCDza+zLkU/Pbn/kM6llBaKYpch56QSLkb7u/gXf6EWpgawcn/eNeJo8D7teROYnJCovZB25qykWnk1/eHKzLzA53AKA/5uXbRQ26J/w7OWizGmKrjxBu3bVqtNxkyAIIAgCBEEgGp4Vpz1938Ozo08XZkbbAQi5hBUX7FKQm6y041RZRVUND+ijkWhoIeDvZ8PeRwAW/l27SvEbOCkotlQec34AAAAASUVORK5CYII=",
                        }),
                        "  Facebook"
                      )
                    ),
                    l.a.createElement(
                      "li",
                      { className: "list-group-item" },
                      l.a.createElement(
                        "a",
                        { className: "btn-floating btn-tw btn-sm", href: "/" },
                        l.a.createElement("img", {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADI0lEQVQ4ja2UW2icRRTHf2dmvt2aTRs3JTeTVNNUxAsVKopQUEsFURGlfeiD0AefpJTWVwWVgAoiKHh50IdC8UGkiET7ZEVFTMEiNNQbqUm3a5to11x2071/3zfHh92Nay5axD/8meHMnD//M3M48D9DWhtVtZkqQ1awm64xuZhkYVSksEYwU9R+E3DaCiNWGsFYwQOqoG2XRcAAVkAhjpVDQwl5ryVoACTBo1YYcdIQCBUihcg313Y2Y6GCKtYJh9sdGoDA840TSn51cru4wkJNOXGhxjs/VDiZrVOOlELNn7pjfHHnmjc8ma9uf3mi+vmzu1Lv35Z2L8QKvkkFfi97xr4rkq/7FTfOSC7ymhJkrHtL1xtf7ZHIzFV0W66uR+KKPVRSRl77vnwkczUmXuX0+HSFQqyIlRXGQq9YUSxH50tX7wGQubpOizBajuDAl8vUYiUw8MhwkgduSJBOGhR4+utlal5Zjc5Aorfu7fxpMGWWPLzkRKipgjPw5PYkx6YqhB7GM1U+uVhluNPS32EIY//Xd7ehN2lcz3VmpypYYYcTx5445OHpZd9zYrp6NGUkXQw1BY38bD4mm4837MWtiUYFTRZcv0gOOA5w+weL+1QY2jB7HQwm5UdVJkQomZi3HcBsXZ+KlAMz+di//m2xPpOPEtciZgUGuuxzXpkcCLgsIt6pavBbyLuA60oKu3oDqjXPpcLGZbbw4I5NPDScHHcCcyFfAHuNiIRG+NQIbEkYzl2uk81F+Jr+I7udcPDODgxgBKywW1XdSmP/obq5DG52Mbr1TCac+OznClO5cF1nHQnh1SfS3NITZJ1wxgneGT7sc/KxA1BVObfgD+eK0X3n5+PRyYtVpmZreL9WbLjb8eJjaW7a6nDCsW0JXhGRqHUuAJPz0b43Ty1/dHqmSqW+TrMBfV2W/Xd38vhdHSSsYKVRqhOWvLJ3MCFnARzA9ZstY/vTaKxcuBLyy5WIpZLHq9KVsoz2Bdw8EEBzdEnzh62AV9IK9wNnVxyqqvm1zvMi7LYgVv4+C1uVt8RaMzFWiGFOA565UWTpX9viv+BP3l+M9VHoZqUAAAAASUVORK5CYII=",
                        }),
                        "  Twitter"
                      )
                    ),
                    l.a.createElement(
                      "li",
                      { className: "list-group-item" },
                      l.a.createElement(
                        "a",
                        { className: "btn-floating btn-li btn-sm", href: "/" },
                        l.a.createElement("img", {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACiklEQVQ4ja2Uv0ubQRjHP3dJzPRWyWusSKt5h2KDQ0GqEEpLQWgkWRxKF6XS/8DJ0smAi4pbVzt0LBSCiwTqEGwQiS6FUhCXEI3FRKk/MjT6vnddfF+SVI2D3+Xee573+fC9u+cO7li+m5KpVEoCA5ZlPe3t7X1kWVawUCgcAvq6GnFVMB6Ph5RS01rrSaVUt9YapRSX42+t9WchxEIul/vTEphIJF7Ytv1Vax1uAjWMWuuybduv8/n89/p62QxTSn1zYS3UJaVcHR4efl4f9PYwHo+HhBBrwL1kMsnExARHR0fUajUikQidnZ04jkM0GmVqaopgMMj29rYPSFqW9alYLP4F8Htkn++91joMYFkWsViMWCx2rb29vT3Paa1WmwY+eEtOpVJSCPHW/eMWy0WIhu1/57IkQD6fHwC6AQzDIJFItASOjY3R3t7uTu8PDQ1FPaDP53vgZvr6+vD7/f8TmhQIBLAsqz700AMqpbzTrlarLWGuTk9PvW+ttah3uOsmSqUSZ2dnt4IVi8X60K4HHBwc/AkcApyfnzM/P3+j02q1yuzsLLZtu6HK1tbWL7jsw2w2q/v7+8NCiGeTk5PkcjnS6TSlUomenh46OjoAKBQKLC0tsbi4yM7OjtcNWuuP+/v7q55DgIuLizmlVHllZYWZmRkMw2BjYwPTND1npmmyvLzM8fFxveGDYDC44E4amml0dPQlkBkZGQmOj4/T1tbWAARIJpOcnJy497rmOM6rzc3NtSuBLlQp9cVxnC7DMEin09cBD4A36+vra/X5hscBIJPJZAOBwGMp5XwoFCo3503TLANzUspoM+xKh/XSWstKpfJEShkBUEoVwuHwDyGEuqnuTvUP5Zcp1CaMtREAAAAASUVORK5CYII=",
                        }),
                        "  Github"
                      )
                    )
                  )
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: "box border-bottom" },
              l.a.createElement(
                "div",
                { className: "bg-primary text-center py-1 text-white mt-3" },
                "Box1"
              ),
              l.a.createElement(
                "div",
                { className: "bg-light px-2 py-3" },
                "Step into the future of hiring with our cutting-edge virtual interview platform. Say goodbye to scheduling headaches and hello to seamless connections, no matter where you are in the world. Elevate your recruitment process and discover top talent like never before."
              )
            )
          );
        });
      }
      a(19);
      function N() {
        return l.a.createElement(
          "div",
          { className: "content-wrapper" },
          l.a.createElement(
            "div",
            { className: "container h-100 container-info-page" },
            l.a.createElement(
              "div",
              { className: "row row-info-page h-100" },
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12 pr-md-5" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-75 my-5" },
                  l.a.createElement("h1", null, "Live Notepad"),
                  l.a.createElement(
                    "p",
                    { className: "" },
                    "Live notepad is your online notepad on the web. It allows you to store notes on the GO without having to Login. Best of all - anotepad is a fast, clean, simple to use and FREE online web notepad."
                  ),
                  l.a.createElement(
                    "div",
                    { className: "row row-info-page" },
                    l.a.createElement(
                      "div",
                      { className: "col-lg-12", id: "generated-link" },
                      l.a.createElement(
                        "div",
                        {
                          className:
                            "form-group from-group-info-page mt-3  text-center",
                        },
                        l.a.createElement(
                          "p",
                          {
                            className: "form-control",
                            onClick: function () {},
                            id: "link-text",
                          },
                          "Copy Link To Share"
                        ),
                        l.a.createElement(
                          "p",
                          {
                            className:
                              "btn btn-block btn-primary btn-info mt-2",
                            onClick: function () {
                              var e =
                                document.getElementById("link-text").innerText;
                              window.open(e, "_self");
                            },
                          },
                          "Tap to Join"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "spinner-border",
                        role: "status",
                        id: "loading",
                      },
                      l.a.createElement(
                        "span",
                        { className: "sr-only" },
                        "Loading..."
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "p",
                        {
                          className: "btn btn-primary a-info-page text-white",
                          onClick: function () {
                            (document.getElementById("loading").style.display =
                              "block"),
                              fetch("/api/info/getNotepadLink", {
                                method: "POST",
                              })
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(
                                  function (e) {
                                    console.log(e),
                                      (document.getElementById(
                                        "loading"
                                      ).style.display = "none"),
                                      (document.getElementById(
                                        "generated-link"
                                      ).style.display = "block"),
                                      (document.getElementById(
                                        "link-text"
                                      ).innerText = e.link);
                                  },
                                  function (e) {
                                    console.log("Error Occurred : ", e);
                                  }
                                );
                          },
                        },
                        "Generate Link"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "form",
                        { className: "form-inline" },
                        l.a.createElement(
                          "div",
                          { className: "form-group form-group-info-page" },
                          l.a.createElement("input", {
                            type: "text",
                            className: "form-control input-info-page",
                            placeholder: "Enter the link",
                          })
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-100" },
                  l.a.createElement("img", {
                    className: "info-img",
                    src: "images/notepad.jpg",
                    alt: "videocalling",
                  })
                )
              )
            )
          )
        );
      }
      function x() {
        return l.a.createElement(
          "div",
          { className: "content-wrapper" },
          l.a.createElement(
            "div",
            { className: "container h-100 container-info-page" },
            l.a.createElement(
              "div",
              { className: "row row-info-page h-100" },
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12 pr-md-3" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-75 my-5" },
                  l.a.createElement("h1", null, "Live Codepad"),
                  l.a.createElement(
                    "p",
                    { className: "" },
                    "This platform boasts flawless video, crystal clear audio and instant sharing capabilities that make it our favourite option for video call interviews."
                  ),
                  l.a.createElement(
                    "div",
                    { className: "row row-info-page" },
                    l.a.createElement(
                      "div",
                      { className: "col-lg-12", id: "generated-link" },
                      l.a.createElement(
                        "div",
                        {
                          className:
                            "form-group from-group-info-page mt-3  text-center",
                        },
                        l.a.createElement(
                          "p",
                          {
                            className: "form-control",
                            onClick: function () {},
                            id: "codepad-link",
                          },
                          "Copy Link To Share"
                        ),
                        l.a.createElement(
                          "p",
                          {
                            className:
                              "btn btn-block btn-primary btn-info mt-2",
                            onClick: function () {
                              var e =
                                document.getElementById(
                                  "codepad-link"
                                ).innerText;
                              window.open(e, "_self");
                            },
                          },
                          "Tap to Join"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "spinner-border",
                        role: "status",
                        id: "loading",
                      },
                      l.a.createElement(
                        "span",
                        { className: "sr-only" },
                        "Loading..."
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "p",
                        {
                          className: "btn btn-primary a-info-page text-white",
                          onClick: function () {
                            (document.getElementById("loading").style.display =
                              "block"),
                              fetch("/api/info/getCodepadLink", {
                                method: "POST",
                              })
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(
                                  function (e) {
                                    console.log(e),
                                      (document.getElementById(
                                        "loading"
                                      ).style.display = "none"),
                                      (document.getElementById(
                                        "generated-link"
                                      ).style.display = "block"),
                                      (document.getElementById(
                                        "codepad-link"
                                      ).innerText = e.link);
                                  },
                                  function (e) {
                                    console.log("Error Occurred : ", e);
                                  }
                                );
                          },
                        },
                        "Generate Link"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "form",
                        { className: "form-inline" },
                        l.a.createElement(
                          "div",
                          { className: "form-group form-group-info-page" },
                          l.a.createElement("input", {
                            type: "text",
                            className: "form-control input-info-page",
                            placeholder: "Enter the link",
                          })
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-100" },
                  l.a.createElement("img", {
                    className: "info-img",
                    src: "images/coding-gif.gif",
                    alt: "videocalling",
                  })
                )
              )
            )
          )
        );
      }
      function k() {
        return l.a.createElement(
          "div",
          { className: "content-wrapper" },
          l.a.createElement(
            "div",
            { className: "container h-100 container-info-page" },
            l.a.createElement(
              "div",
              { className: "row row-info-page h-100" },
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12 pr-md-5" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-75 my-5" },
                  l.a.createElement("h1", null, "Video Call"),
                  l.a.createElement(
                    "p",
                    { className: "" },
                    "This platform boasts flawless video, crystal clear audio and instant sharing capabilities that make it our favorite option for video call interviews."
                  ),
                  l.a.createElement(
                    "div",
                    { className: "row row-info-page" },
                    l.a.createElement(
                      "div",
                      { className: "col-lg-12", id: "generated-link" },
                      l.a.createElement(
                        "div",
                        {
                          className:
                            "form-group from-group-info-page mt-3  text-center",
                        },
                        l.a.createElement(
                          "p",
                          {
                            className: "form-control",
                            onClick: function () {},
                            id: "link-text",
                          },
                          "Copy Link To Share"
                        ),
                        l.a.createElement(
                          "p",
                          {
                            className:
                              "btn btn-block btn-primary btn-info mt-2",
                            onClick: function () {
                              var e =
                                document.getElementById("link-text").innerText;
                              window.open(e, "_self");
                            },
                          },
                          "Tap to Join"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "spinner-border",
                        role: "status",
                        id: "loading",
                      },
                      l.a.createElement(
                        "span",
                        { className: "sr-only" },
                        "Loading..."
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "p",
                        {
                          className: "btn btn-primary a-info-page text-white",
                          onClick: function () {
                            (document.getElementById("loading").style.display =
                              "block"),
                              fetch("/api/info/getVideoCallLink", {
                                method: "POST",
                              })
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(
                                  function (e) {
                                    console.log(e),
                                      (document.getElementById(
                                        "loading"
                                      ).style.display = "none"),
                                      (document.getElementById(
                                        "generated-link"
                                      ).style.display = "block"),
                                      (document.getElementById(
                                        "link-text"
                                      ).innerText = e.link);
                                  },
                                  function (e) {
                                    console.log("Error Occurred : ", e);
                                  }
                                );
                          },
                        },
                        "Generate Link"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "form",
                        { className: "form-inline" },
                        l.a.createElement(
                          "div",
                          { className: "form-group form-group-info-page" },
                          l.a.createElement("input", {
                            type: "text",
                            className: "form-control input-info-page",
                            placeholder: "Enter the link",
                          })
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-100" },
                  l.a.createElement("img", {
                    className: "info-img",
                    src: "images/videoCalling.jpg",
                    alt: "videocalling",
                  })
                )
              )
            )
          )
        );
      }
      function C() {
        return l.a.createElement(
          "div",
          { className: "content-wrapper" },
          l.a.createElement(
            "div",
            { className: "container h-100 container-info-page" },
            l.a.createElement(
              "div",
              { className: "row row-info-page h-100" },
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12 pr-md-5" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-75 my-5" },
                  l.a.createElement("h1", null, "Video call and Notepad"),
                  l.a.createElement(
                    "p",
                    { className: "" },
                    "Combining video call with live notepad makes the interview process much smooth and gives a flawless experience. With this option Virtual Interviews are no different than f2f interviews."
                  ),
                  l.a.createElement(
                    "div",
                    { className: "row row-info-page" },
                    l.a.createElement(
                      "div",
                      { className: "col-lg-12", id: "generated-link" },
                      l.a.createElement(
                        "div",
                        {
                          className:
                            "form-group from-group-info-page mt-3  text-center",
                        },
                        l.a.createElement(
                          "p",
                          {
                            className: "form-control",
                            onClick: function () {},
                            id: "link-text",
                          },
                          "Copy Link To Share"
                        ),
                        l.a.createElement(
                          "p",
                          {
                            className:
                              "btn btn-block btn-primary btn-info mt-2",
                            onClick: function () {
                              var e =
                                document.getElementById("link-text").innerText;
                              window.open(e, "_self");
                            },
                          },
                          "Tap to Join"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "spinner-border",
                        role: "status",
                        id: "loading",
                      },
                      l.a.createElement(
                        "span",
                        { className: "sr-only" },
                        "Loading..."
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "p",
                        {
                          className: "btn btn-primary a-info-page text-white",
                          onClick: function () {
                            (document.getElementById("loading").style.display =
                              "block"),
                              fetch("/api/info/getNoteVideoLink", {
                                method: "POST",
                              })
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(
                                  function (e) {
                                    console.log(e),
                                      (document.getElementById(
                                        "loading"
                                      ).style.display = "none"),
                                      (document.getElementById(
                                        "generated-link"
                                      ).style.display = "block"),
                                      (document.getElementById(
                                        "link-text"
                                      ).innerText = e.link);
                                  },
                                  function (e) {
                                    console.log("Error Occurred : ", e);
                                  }
                                );
                          },
                        },
                        "Generate Link"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "form",
                        { className: "form-inline" },
                        l.a.createElement(
                          "div",
                          { className: "form-group form-group-info-page" },
                          l.a.createElement("input", {
                            type: "text",
                            className: "form-control input-info-page",
                            placeholder: "Enter the link",
                          })
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-100" },
                  l.a.createElement("img", {
                    className: "info-img",
                    src: "images/video-note.png",
                    alt: "videocalling",
                  })
                )
              )
            )
          )
        );
      }
      function B() {
        return l.a.createElement(
          "div",
          { className: "content-wrapper" },
          l.a.createElement(
            "div",
            { className: "container h-100 container-info-page" },
            l.a.createElement(
              "div",
              { className: "row row-info-page h-100" },
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12 pr-md-5" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-75 my-5" },
                  l.a.createElement("h1", null, "Codepad and Video Call"),
                  l.a.createElement(
                    "p",
                    { className: "" },
                    "Code-debug-execute your logic with explaination in real time with this perfect blend of Codepad and Video call. It includes tools most suited for coding interviews."
                  ),
                  l.a.createElement(
                    "div",
                    { className: "row row-info-page" },
                    l.a.createElement(
                      "div",
                      { className: "col-lg-12", id: "generated-link" },
                      l.a.createElement(
                        "div",
                        {
                          className:
                            "form-group from-group-info-page mt-3  text-center",
                        },
                        l.a.createElement(
                          "p",
                          {
                            className: "form-control",
                            onClick: function () {},
                            id: "link-text",
                          },
                          "Copy Link To Share"
                        ),
                        l.a.createElement(
                          "p",
                          {
                            className:
                              "btn btn-block btn-primary btn-info mt-2",
                            onClick: function () {
                              var e =
                                document.getElementById("link-text").innerText;
                              window.open(e, "_self");
                            },
                          },
                          "Tap to Join"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "spinner-border",
                        role: "status",
                        id: "loading",
                      },
                      l.a.createElement(
                        "span",
                        { className: "sr-only" },
                        "Loading..."
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "p",
                        {
                          className: "btn btn-primary a-info-page text-white",
                          onClick: function () {
                            (document.getElementById("loading").style.display =
                              "block"),
                              fetch("/api/info/getCodeVideoLink", {
                                method: "POST",
                              })
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(
                                  function (e) {
                                    console.log(e),
                                      (document.getElementById(
                                        "loading"
                                      ).style.display = "none"),
                                      (document.getElementById(
                                        "generated-link"
                                      ).style.display = "block"),
                                      (document.getElementById(
                                        "link-text"
                                      ).innerText = e.link);
                                  },
                                  function (e) {
                                    console.log("Error Occurred : ", e);
                                  }
                                );
                          },
                        },
                        "Generate Link"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "form",
                        { className: "form-inline" },
                        l.a.createElement(
                          "div",
                          { className: "form-group form-group-info-page" },
                          l.a.createElement("input", {
                            type: "text",
                            className: "form-control input-info-page",
                            placeholder: "Enter the link",
                          })
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-100" },
                  l.a.createElement("img", {
                    className: "info-img",
                    src: "images/code-video.png",
                    alt: "videocalling",
                  })
                )
              )
            )
          )
        );
      }
      function L() {
        return l.a.createElement(
          "div",
          { className: "content-wrapper" },
          l.a.createElement(
            "div",
            { className: "container h-100 container-info-page" },
            l.a.createElement(
              "div",
              { className: "row row-info-page h-100" },
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12 pr-md-5" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-75 my-5" },
                  l.a.createElement("h1", null, "Powerhouse Interview"),
                  l.a.createElement(
                    "p",
                    { className: "" },
                    "Perfect platform to take any kind of interviews. It includes every tool needed for online interviews, having features such as codepad, notepad video and audio call."
                  ),
                  l.a.createElement(
                    "div",
                    { className: "row row-info-page" },
                    l.a.createElement(
                      "div",
                      { className: "col-lg-12", id: "generated-link" },
                      l.a.createElement(
                        "div",
                        {
                          className:
                            "form-group from-group-info-page mt-3  text-center",
                        },
                        l.a.createElement(
                          "p",
                          {
                            className: "form-control",
                            onClick: function () {},
                            id: "link-text",
                          },
                          "Copy Link To Share"
                        ),
                        l.a.createElement(
                          "p",
                          {
                            className:
                              "btn btn-block btn-primary btn-info mt-2",
                            onClick: function () {
                              var e =
                                document.getElementById("link-text").innerText;
                              window.open(e, "_self");
                            },
                          },
                          "Tap to Join"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "spinner-border",
                        role: "status",
                        id: "loading",
                      },
                      l.a.createElement(
                        "span",
                        { className: "sr-only" },
                        "Loading..."
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "p",
                        {
                          className: "btn btn-primary a-info-page text-white",
                          onClick: function () {
                            (document.getElementById("loading").style.display =
                              "block"),
                              fetch("/api/info/getPowerhouseLink", {
                                method: "POST",
                              })
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(
                                  function (e) {
                                    console.log(e),
                                      (document.getElementById(
                                        "loading"
                                      ).style.display = "none"),
                                      (document.getElementById(
                                        "generated-link"
                                      ).style.display = "block"),
                                      (document.getElementById(
                                        "link-text"
                                      ).innerText = e.link);
                                  },
                                  function (e) {
                                    console.log("Error Occurred : ", e);
                                  }
                                );
                          },
                        },
                        "Generate Link"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-6 col-md-12 col-sm-12 col-12" },
                      l.a.createElement(
                        "form",
                        { className: "form-inline" },
                        l.a.createElement(
                          "div",
                          { className: "form-group form-group-info-page" },
                          l.a.createElement("input", {
                            type: "text",
                            className: "form-control input-info-page",
                            placeholder: "Enter the link",
                          })
                        )
                      )
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: "col-lg-6 col-md-6 col-sm-12 col-12" },
                l.a.createElement(
                  "div",
                  { className: "row row-info-page h-100" },
                  l.a.createElement("img", {
                    className: "info-img",
                    src: "images/powerhouse.jpg",
                    alt: "videocalling",
                  })
                )
              )
            )
          )
        );
      }
      var O,
        P,
        I,
        V,
        D,
        S,
        T = a(41),
        R = a(74),
        H = (a(123), a(13)),
        j = a.n(H),
        Q = j()("/"),
        M = window.innerWidth,
        K = window.innerHeight - 168,
        z = 0,
        q = (function (e) {
          Object(E.a)(a, e);
          var t = Object(A.a)(a);
          function a(e) {
            var n;
            Object(p.a)(this, a),
              ((n = t.call(this, e)).componentDidMount = function () {
                (O = document.getElementById("localVideo")),
                  (V = document.getElementById("candidateVideo")),
                  (P = document.querySelector("select#audioSource")),
                  (I = document.querySelector("select#videoSource")),
                  navigator.mediaDevices
                    .enumerateDevices()
                    .then(n.gotDevices)
                    .then(n.getStream)
                    .catch(n.handleError),
                  (P.onchange = n.getStream()),
                  (I.onchange = n.getStream()),
                  n.getStream().then(n.getDevices).then(n.gotDevices),
                  Q.emit("join", n.state.roomID),
                  Q.on("created", function (e, t) {
                    console.log(
                      "You (".concat(t, ") have joined the room (").concat(e)
                    );
                  }),
                  Q.on("full", function (e) {
                    console.log("Room (".concat(e, ") is full"));
                  }),
                  Q.on("joined", function (e, t) {
                    console.log(
                      "Client (".concat(t, ") have joined the room (").concat(e)
                    );
                  }),
                  Q.on("hey", function (e) {
                    n.trace("SOMEONE CALLING"), (D = e), n.acceptCall();
                  }),
                  Q.on("disconnect", function () {
                    n.trace("Call Ended"),
                      (document.getElementById("startCall").style.display =
                        "block"),
                      (document.getElementById("endCall").style.display =
                        "none"),
                      (document.getElementById("candidateDiv").style.display =
                        "none"),
                      (document.getElementById("localVideo").height = K),
                      (document.getElementById("localVideo").width = M),
                      n.setState({ state: n.state }),
                      S.getTracks().forEach(function (e) {
                        return (e.enabled = !e.enabled);
                      }),
                      n.getStream();
                  });
              }),
              (n.getDevices = function () {
                return navigator.mediaDevices.enumerateDevices();
              }),
              (n.gotDevices = function (e) {
                window.deviceInfos = e;
                var t,
                  a = Object(R.a)(e);
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var n = t.value,
                      l = document.createElement("option");
                    (l.value = n.deviceId),
                      "audioinput" === n.kind
                        ? ((l.text =
                            n.label || "Microphone ".concat(P.length + 1)),
                          P.appendChild(l))
                        : "videoinput" === n.kind &&
                          ((l.text = n.label || "Camera ".concat(I.length + 1)),
                          I.appendChild(l));
                  }
                } catch (o) {
                  a.e(o);
                } finally {
                  a.f();
                }
              }),
              (n.getStream = function () {
                var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                (document.getElementById("candidateDiv").style.height = K),
                  (document.getElementById("candidateDiv").style.width = M),
                  window.stream &&
                    window.stream.getTracks().forEach(function (e) {
                      e.stop();
                    });
                var a = P.value,
                  l = I.value,
                  o = !!e && { deviceId: a ? { exact: a } : void 0 },
                  c = !!t && { deviceId: l ? { exact: l } : void 0 },
                  r = { audio: o, video: c };
                return (
                  n.trace("Requesting local stream."),
                  navigator.mediaDevices
                    .getUserMedia(r)
                    .then(n.gotStream)
                    .catch(n.handleError)
                );
              }),
              (n.gotStream = function (e) {
                (window.stream = e),
                  (P.selectedIndex = Object(T.a)(P.options).findIndex(function (
                    t
                  ) {
                    return t.text === e.getAudioTracks()[0].label;
                  })),
                  (I.selectedIndex = Object(T.a)(I.options).findIndex(function (
                    t
                  ) {
                    return t.text === e.getVideoTracks()[0].label;
                  })),
                  (O.srcObject = e),
                  (O.muted = !0),
                  (document.getElementById("localVideo").height = K),
                  (document.getElementById("localVideo").width = M),
                  (S = e),
                  n.trace("Received local stream.");
              }),
              (n.handleError = function (e) {
                n.trace(
                  "navigator.getUserMedia error: ".concat(e.toString(), ".")
                );
              }),
              (n.startCall = function () {
                (document.getElementById("startCall").style.display = "none"),
                  (document.getElementById("endCall").style.display = "block"),
                  n.trace("Starting call.");
                var e = new s.a({
                  initiator: !0,
                  trickle: !1,
                  stream: S,
                  iceServers: [
                    { url: "stun:stun1.l.google.com:19302" },
                    {
                      url: "turn:numb.viagenie.ca",
                      credential: "muazkh",
                      username: "webrtc@live.com",
                    },
                  ],
                });
                e.on("signal", function (e) {
                  n.trace("Working......................"),
                    z < 1 &&
                      (Q.emit("callUser", {
                        roomID: n.state.roomID,
                        signal: e,
                      }),
                      z++);
                }),
                  e.on("stream", function (e) {
                    n.trace("Partner Stream recieved to original user"),
                      M > 992
                        ? ((document.getElementById("localVideo").height = 150),
                          (document.getElementById("localVideo").width = 250))
                        : ((document.getElementById("localVideo").height = 150),
                          (document.getElementById("localVideo").width = 125)),
                      (document.getElementById("candidateDiv").style.display =
                        "block"),
                      (V.srcObject = e);
                  }),
                  Q.on("callAccepted", function (t) {
                    n.trace("Outgoing call got Accepted"), e.signal(t);
                  });
              }),
              (n.acceptCall = function () {
                n.trace("Incoming Call Accepted"),
                  (document.getElementById("startCall").style.display = "none"),
                  (document.getElementById("endCall").style.display = "block");
                var e = {
                    initiator: !1,
                    trickle: !1,
                    stream: S,
                    iceServers: [
                      { url: "stun:stun1.l.google.com:19302" },
                      {
                        url: "turn:numb.viagenie.ca",
                        credential: "muazkh",
                        username: "webrtc@live.com",
                      },
                    ],
                  },
                  t = new s.a(e);
                t.on("signal", function (e) {
                  n.trace("Sending candidate signal now"),
                    Q.emit("acceptCall", { roomID: n.state.roomID, signal: e });
                }),
                  t.on("stream", function (e) {
                    n.trace("Partner Stream recieved to candidate user"),
                      M > 992
                        ? ((document.getElementById("localVideo").height = 150),
                          (document.getElementById("localVideo").width = 250))
                        : ((document.getElementById("localVideo").height = 150),
                          (document.getElementById("localVideo").width = 125)),
                      (document.getElementById("candidateDiv").style.display =
                        "block"),
                      (V.srcObject = e);
                  }),
                  t.signal(D);
              }),
              (n.endCall = function () {
                (document.getElementById("endCall").style.display = "none"),
                  (document.getElementById("startCall").style.display =
                    "block"),
                  Q.emit("disconnectCall", n.state.roomID),
                  n.trace("Ending call.");
              }),
              (n.trace = function (e) {
                e = e.trim();
                var t = (window.performance.now() / 1e3).toFixed(3);
                console.log(t, e);
              }),
              (n.videoOff = function () {
                (document.getElementById("videoOff").style.display = "none"),
                  (document.getElementById("videoOn").style.display = "block"),
                  S.getVideoTracks().forEach(function (e) {
                    return (e.enabled = !e.enabled);
                  }),
                  console.log("Vid Off");
              }),
              (n.videoOn = function () {
                (document.getElementById("videoOn").style.display = "none"),
                  (document.getElementById("videoOff").style.display = "block"),
                  S.getVideoTracks().forEach(function (e) {
                    return (e.enabled = !e.enabled);
                  }),
                  console.log("Vid On");
              }),
              (n.micOff = function () {
                (document.getElementById("micOff").style.display = "none"),
                  (document.getElementById("micOn").style.display = "block"),
                  S.getAudioTracks().forEach(function (e) {
                    return (e.enabled = !e.enabled);
                  }),
                  console.log("Mic Off");
              }),
              (n.micOn = function () {
                (document.getElementById("micOn").style.display = "none"),
                  (document.getElementById("micOff").style.display = "block"),
                  S.getAudioTracks().forEach(function (e) {
                    return (e.enabled = !e.enabled);
                  }),
                  console.log("Mic On");
              }),
              (n.share = function () {
                var e = document.createElement("input"),
                  t = window.location.href;
                document.body.appendChild(e),
                  (e.value = t),
                  e.select(),
                  document.execCommand("copy"),
                  document.body.removeChild(e),
                  alert("Text copied to clipboard");
              });
            var l = n.props.match.params.roomID;
            return (n.state = { roomID: l }), n;
          }
          return (
            Object(v.a)(a, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "content-wrapper-fixed" },
                    l.a.createElement(
                      "div",
                      { className: "", id: "video-box" },
                      l.a.createElement(
                        "div",
                        { className: "users", id: "localDiv" },
                        l.a.createElement("video", {
                          id: "localVideo",
                          playsInline: !0,
                          muted: !0,
                          autoPlay: !0,
                        })
                      ),
                      l.a.createElement(
                        "div",
                        { className: "users", id: "candidateDiv" },
                        l.a.createElement("video", {
                          width: M,
                          height: K,
                          id: "candidateVideo",
                          playsInline: !0,
                          autoPlay: !0,
                        })
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className:
                          "videocall-controls  d-flex flex-row justify-content-center p-3 border-top border-info",
                      },
                      l.a.createElement(
                        "div",
                        null,
                        l.a.createElement("img", {
                          "data-target": "#mymodal",
                          "data-toggle": "modal",
                          className:
                            "videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2",
                          alt: "control",
                          id: "expandDeviceSelector",
                          src: "data:image/png;base64,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",
                        }),
                        l.a.createElement(
                          "div",
                          { className: "modal fade", id: "mymodal" },
                          l.a.createElement(
                            "div",
                            {
                              className:
                                "modal-dialog modal-lg modal-dialog-centered h-100",
                            },
                            l.a.createElement(
                              "div",
                              { className: "modal-content" },
                              l.a.createElement(
                                "div",
                                { className: "modal-header" },
                                l.a.createElement(
                                  "h4",
                                  { className: "text-success text-center" },
                                  "Choose Audio and Video Source"
                                ),
                                l.a.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    name: "button",
                                    className: "close",
                                    "data-dismiss": "modal",
                                  },
                                  " \xd7 "
                                )
                              ),
                              l.a.createElement(
                                "div",
                                { className: "modal-body" },
                                l.a.createElement(
                                  "div",
                                  { className: "p-2 text-center" },
                                  l.a.createElement(
                                    "label",
                                    { htmlFor: "audioSource" },
                                    "Audio source : "
                                  ),
                                  l.a.createElement("br", null),
                                  l.a.createElement("select", {
                                    id: "audioSource",
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "p-2 text-center" },
                                  l.a.createElement(
                                    "label",
                                    { htmlFor: "videoSource" },
                                    "Video source : "
                                  ),
                                  l.a.createElement("br", null),
                                  l.a.createElement("select", {
                                    id: "videoSource",
                                  })
                                )
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement("img", {
                        className:
                          "videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2",
                        onClick: this.micOn,
                        alt: "control",
                        id: "micOn",
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAANs0lEQVR4nO2bf5BV5XnHP8+5d+/+XtyAIAvI8hsVASmg0AlOpSlCJGglJDHT/KiTWtsZZ5I0kY5NpmpLSTuapEwzY2ZqtWmaxibW4o+KSjBaBAXlhwgIuLssv2TZXWB37929P855+se59/y+d+8ua2invrP37jnPec/7Pt/v87zP+7zvORc+Lv+/iwxWQZMtqxW+CzIXSHhvldDdpZrTEVTN35ZqVPvOeQZ0nwUPxmunPT+UXgrgN4erBcFHNTM4YM1XCRMZVUr3MQgJgGKhd8Rrpz/jrWGUVNC2vE8JES94iVBMQ4q5H/V9CnWDcu89xdoN9i8CIkF9/McG8udBjPFSBIAx2+10MKuX45bllqBlvX27+vh1seUioCqBes7xdcGeSnoA6JFCI8Wt7lrGa+ni4HWQT/Q9Xs8I9hvUy9Y10hOOBlsuSYCgfxkGHwSTP3IsHjUOBwNYbv3CkInWwatjFAkibAj2VpqA2qnPCsYa0F0gmbCSxSxeDuByiYmq43pEUJ+85va3TUIW2COi66Rm6r+HMJboOayKHq4nVbkckY3ArMEjr1+m5TgAlPC4KFlkbNqMWN+nqnqXyFXJkn2Vp5K/6IXjjVph7QMmeaTBWvb3cONgvhQnowgRwl9IdfNfl93+cBXTVMtnVeWp/Jn3iv0dAh5mwrKU91vO0treCcDE8Y3MmdWEYYSn12gihE0t1fz0VBWfbUrz9Wn9L8Rrmz89FByDTIMlSr+5hapYQDhYgHJl/QNZdu9rp+uC66EteSLmXjOB4Jh2kybFJUH52alKBnLwk/ZK3r4QvzhUGINMgyWKGD4TlQ5K+fN8otPR2cu2N47Qeb4vlASdON1d/H68QdcunxmXdqbH9y7GvjDn2Qt/PBQYwyegSlYUlFMNDwHn2AsQiyOtHWzf3cJAOhuRASrpTM7NFCNnl/xR/tq3Z6T43SszDkcCfz/3mYs3lgtjWARoz8nRqjxS3OU9wPOapTNZtu9u4cDh01iWFQk+lCITRYQ/9zBE2XBtH3Pqs7bA0goV619m/ee5+hEnQLuONmiqZZ3GMntBJ0a7vB84KOcvJNm2/QgfdvSUBO6zfBQRKJs+qGHJq408erTaIaEypnzv+iR1cUeh6QmJP1gOJjfDTrauQeTrIAuBWnfMlXJBvwy8FrS1a2nvZO/BU1hW+fPhnavmeRQUzxQgLH11DCnTPr9veoq7mwfsKyK8cCbB+gO19rmqKcr8/b//iQOl+jIANNW6EZFnQG72g/dWLTbOXZnXfXM5k5172nj73ROYZmmXD3uAhdf6Xm9YfVXacbhNR2t4/VyF0/+q8RlubMzaIxCJxQ35QUmmAUOTrWtA7i9/TR+M9mHwPb0DvPLfh2k/1T0k4G6w9A8D+9zu55sze5nbkEMtsCz4zoFaOtOFaVJZPzuFoYpakDZZ/t6ZdtVUW/5zvE9Tx7dqss3JFQzb7cOgi1l/MPBtJ7p4+bVDXOzpHx54L2hg05E6lrwylu8fsR0zYVg8Ou8C4xImWEr3gLDxYI2j27Q6i1vHZcBSsJR//KDSq3MtcAsiz2my7SEA0VRbL1DnTS7sxlzQA+k0R1tO09J2mu7zffQm+8lmcxHeAePHj4+UD6Wsu20u5Mf+0pfHO2P+4bk9rJkwACLs7KzgnreucMzwTzf1sXB0FhF4vyfO2tfqUSBuKK9+qpdGZzPPg1NZZfiF+Uv5VnM5kx27D/LYE8/z4tZdHPngFJ3dF0mnM1iWFfkZrtVDQyA/DD49PulYc8O7dRzrjYEqN43JcltT2rm26XClo/usBpP5V2TBUnI52HKqIuDRDuZvGMBuD3TnqC/Zz8+e/hWv73iXdCY6afmoPnhI+OY1PcyotwNbf074m/fqnWt/OjNJQuz48E5XnD3dcQfHqgk5J1huOVVBFEZgsYHKo0FuevtSPPlvL3HqTGdRS3+UHuAkUihVhsXfzT9PHDuwvdVRwTtdCVBoqjFZ1ZRBLXvi+GWbu2m9oikDefmeToMBMyKgC2JI7eRnUXV2SnI5k19s/jU9vcnfqNX9BOAjobkuy5oJKcfdHztc7XjB55v7HfkrJ+OkTXsYfKJSmVaXA0vJ5GBfd3DhBsAuA0Bqmx9AWQ1s2/7mgczpD4du+RGNAd4Bmz+8e0bSmd52diQ4nzFA4drGHBOrLdSC3oywt8sdBgtHm4537O2KheOA8qiTCkvt5Oce/Nsn1r62Y9/A5bK8dwg4QyE/JTbVZLmh0Z7eLFPZcdYd18s8095b51xLzxplOvLjFwN5juoGqW1+3rcWEJE7LMtqGK71RzQGEPaCpWPd8b79TMLJFa5tdC39/nkX0tV16sjbemMAfcA2lM9IbfMDENgQUdXVPvcbRrnU++02Cvv76tsJWjAmjVp1ALT1FCytzBqVtbNnoO2CS8DEWtOR7+kwThi1zVcH+/IRYFlW6MHB0JW/dAJskwdyE5SxVZbt0kBnSpyqY6rUkXf1S14PqKtw5Qo1UT0FCbjqklUfEQKiy+gqEzXt486kS1BDwnLkfQNu/doKceSoRu4PBIfAJSv5URKACFqwqGdeF3DlvodW6siLlSABp4GZl6LjyBAQXpkKwsUBgbxFr6hWp2oy58pr8ohEIJXDkWMHwFAJEnCQSyRgJEoh8LlPe21BR8pwLDoqUUAmfNgXc+Rjqiynnd60eD0gkgAnZGp/25Rbli1ovNw5gO1BgecC+cN9ZytQE9SEmQ2mvVsEHOk2HPmkOpeAE72uXE1OFCVA+9pXoLJ/6eLrb65MVPyvIMBrfcn/33W6wklsFoxzl+NvtMcc+XVjXAKOX8CRV4uejCRA+9umYOgvgLqa6iqWLZ1/2QkQCVv//IDw6vGEk9gsasqB2BPm9hNxR/5bV1nOjQc7Yo783kW5z+V3hno01fYfOtAyK+8Buh6oK/S3bOl8JowfcwnWG6lib4gUrP/0oWoG0oqayrwrs0xrtD3lUEeMMxftWaHGsFjUZDoxZNdJW66mcoNDDPUgt2PFdmjq2CQDlVXebuPxGF/6/Crq66ovYyrsB9/VH+OxXVVgARZ8YU7W8YzH9yQc+S1TLBL5BPFcUjh6zgAL4ijzxoWM0wjxRwxgrI91YFRDHffds45JE8ZenhjgAY/A916v5nzStubkBpPVM7OAcLInxrMHY46V75qbc3BsOWJg5mz5wvFKTYUfIwDKCgPkbHD3VwQa6mv5k7vvZOWnlvCbDowuePv/i4fiduJjKQ8vHyBRYYN4bEecbMYGOedKk8UTLcf9nztoOMTcOtMMvENgo8dA44j1X6j8UfAyCPF4jOXLFrJk0XUcONTCe4daOdvRzcWePtKZbPiWkSrijf7w5QUZntyV4CuLsixtNgHhzfYY//pOnELY+cYn3bzgcIewo9W+Nx6DlTOLxCbVLaL9bVNQ9oF4cuXwzrB/GzxKZi9hDx89ya/fOEjOtBhuufcryx3wPjLy7/30pYVbf1zFyQt2nWXTlJ98Meu8F/StzTF+vsdOcVbPUX601p0ZPHi6ID7fkOrmVgxrLWhvWJXoV1TCLyu48/bsGRO587YbGVVffWlDQCQSPAh/9VKCk112+lsTgw2rXPDHOoVfvpNPjU34w8UB6ys9YD0F8flSM/FkHECqpr6k/S3XQ2x9flaYABqz1+ResBpx7CdGFcaMHsW623+bra/t51jrhxEkDlLEXdMHnw2KCJv3irMYeniVyaRG1xgbXzTIZino9/Ki2ZN/r1RXzlpAqqceB+4dqq6abG+yNPsHoA+BJAokJCoqWLl8AXsPtLH9rUNDejjqd39bYp/aHvDVm0we327w5SXK2hs8gW+/8OIByIO3JGZ9e/C+RqiYfR/cD7rRPtP8nw2649wFXtj6Nj29/WW1dd/XCo/u8sB9Q8CvdsH1z/bA8kcMPZ+Swk0/PvMPk+8ZrK/hvyESash40qeg5N8rRhh75RV87vZPcvXE8jJM7xpAPLGgGPisCff8s2h3L6Kmojk9njYy3ypP75EqEot4zOYSUVNdyR0rl7B08WyAQdcCYeD+tr0vRn/3aeHNoyL5VV+OHF/t3jSjpxy1R44AzX6p+PvEbmKz+IaZ3L7yRqoqo5OrykRF8fspTA7+kfvznW7OT07/7MPHm7eVq/YlE6DJ9ibta71fRR4szARhIvxgmq++ii+u/R3Gj2sMtXfNzEmR97rthon52jKoimM1VOqPzj4x5YdD0X/IQVD1dI2VyqwX9C6gGcgvP8KPXez6xdsyTYudbx9i/3utAMyaPpGbl84lFvNMg6Gco/i5CC2gD2Cav5L66R3l4BkSAaqna+jPbAVuss+hGPAoWbmr5RF4V7jQby+wlZy1Xhqmvh/ZV3kq5ZtLtj+E6He8IMsnIdTaMFQZEnj729bvvIg5T2qmh7bFhhYDRO9yOwoGpaigVQqUDKOeKyv90x0feIBG1fgjUa0P8V1hnRQGanfm/lTFVcCt42tjkD4GI4MSVnfbD3umtSKqxaHOAidCDy4jInXYI4IKl/pE31OweLk/3fHrGDlOgSESYKn+NNCoT8lglubf1x9KuHHv8bt6uJ+gLkXAo8qWYj2VXVRPVGsqtxVkyf+x3w12iZjzpWZGaGt8SB4gMqlfauLLFX1QlWM4D56Cw6KgcGnr+106dLXE/f7+SoDvUeWpYuA/Lh+Xjwv/Ax021ssCLJTrAAAAAElFTkSuQmCC",
                      }),
                      l.a.createElement("img", {
                        className:
                          "videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2",
                        onClick: this.micOff,
                        alt: "control",
                        id: "micOff",
                        src: "data:image/png;base64,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",
                      }),
                      l.a.createElement("img", {
                        className:
                          "videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2",
                        onClick: this.startCall,
                        alt: "control",
                        id: "startCall",
                        src: "data:image/png;base64,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",
                      }),
                      l.a.createElement("img", {
                        className:
                          "videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2",
                        onClick: this.endCall,
                        alt: "control",
                        id: "endCall",
                        src: "data:image/png;base64,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",
                      }),
                      l.a.createElement("img", {
                        className:
                          "videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2",
                        onClick: this.share,
                        alt: "control",
                        id: "share",
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFCklEQVR4nO2bW2xUVRSGv3VmykCnRsHE0lYfuPpgGkrlFlEEejFAS5C2hgpFRLzERIVSI5GX+oSxCoQQEoMaJQ0kUCFAJsFAK9fwYKSUe4rlBWk7NaWoXMrMcLYPdIZxLp1yOnRPyXxPe++19trr/Nkr57RZI8SRymNqvFIcAEbFM24MbiFcRdEiiv02k701s6S9r5slnpmsPKKqRKiJZ0wLdAtsVnbWbXhJrsdyNuJ5smGwT0FLPGNaYKiCKnycrjyiJsZyjusN0EHVL8qphvCcsjFLKZYiTAsy3xaTovUz5ddo+we9AKGsPKIWirAVGNGz1Gm3MbVmukS8mXEtgURg46uy225jCnC1Z+lp3z1+iuYf8wYUFlY4TfudfGXIGEOplHglGgullEcZ0qHEvNiwf3cjoB5m/8qjKlfgBDC0Z2nBhhmyN9SvNwEkf25ZFaLWAk8+zOGPgFZgp7KlfFm/b4e7r5sqj6oaBVU904YNMyQv1CeiANXV1cbx387VAuWW0n103AS+OOSq+4Y+3IhPDql0YwjXABvgw0566KsxogD5c8s+RdRX/nlmRjoTJ2STlpbWv/T7wLkLlzh/4RIAWZkZdHd303m9K9Rth+9W2vLDh3/sjhVv1VF1HJgOoKBo4wxxBdvtoRsKCyucptxZ65/PeS2Pjz54h5SUgSn/bdt3BgSYPfNlKsrL+L2xiR+27eDyH1f8buV2502AxcS6CYrzyH0BRMgKNYe9BVRKdx49NZ+ZMXJAHz4SIsKk3Bw2r19H2cL5wabygnmllTEDGHQExibPhJvDUOP8o9ycbK0PH4xhGLy3vILS14sDawqq8+aXp/e2T0zuBcYRbnz4DRCe8I+HD3/KcsJWSR02LDC+Hl77rFi2mHFjRvunaXLP+1l/zku4D6FnszIC48ams3i93v/ZbTYbyyoWBS+9QT++aBNOgIkTsklzOgFobXOzact3YSJMfjGHESOG+6dZs4sXxvyjJxphNaEbh8PB4kUlfPv9NgAOHGyg6ex5cnOyyRj5oNydqamBEhHTGA+csnJewgkAULKgiMstV2g4fByAtnY3rgO9fACKZFo9K+FKAO6/+tas/pj3V7wVKIfeMJTZEdMpCgl5A+C+CKULiiieU0Bj01mutbbTdePvML+ddXsqpk/O3n7Q9bOlcxJWAD8Oh4NpUyZFM5vvvr2k1urDQ4KWwEAy2AV4qP8RRGLQCvDntTaWLP/QyJ9X2lJQVDIu9o7IDFoBjp04ibvjLwFGm0ip1TiDVgCvzxcYCzisxhm0AsSLpAC6E9BNUgDdCegmKYDuBHSTFEB3ArpJCqA7Ad0kBdCdgG6SAuhOQDdJAXQnoJukALoT0E1SAN0J6CYpgO4EdJMUQHcCukkKoDsB3Tz2AijBE5gId0Ptj70AItQpaFHQ4lPUhdoTvkWmv6x/RZqBsdHsj/0NiEWYAKL41z+O1KubKHR2BuVmqvD2sT4SLoCoZv84Uq9uIuDxeDl1+syDBTGao3v3TpgADvHUAzcgeq+uTjweL5u2bKXdHeiN7LqVSoPVeBG7rAvmla5W8LV/njEyPaxXVwetbW5OnT4T/PAAqw656jZajRmtzVzyi0pqUfKm1cADgYLaelfdUvrRLmeLZrjSfHHPqOdf+EdgKg9+e5codAGf17vq1tDPXsGYPzQoLi5OvauG5JkmYxHRWwNKuRVy+bZT6k/u2nUnHiH/A+yWdxL+S8VIAAAAAElFTkSuQmCC",
                      }),
                      l.a.createElement("img", {
                        className:
                          "videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2",
                        onClick: this.videoOn,
                        alt: "control",
                        id: "videoOn",
                        src: "data:image/png;base64,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",
                      }),
                      l.a.createElement("img", {
                        className:
                          "videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2",
                        onClick: this.videoOff,
                        alt: "control",
                        id: "videoOff",
                        src: "data:image/png;base64,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",
                      })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        W = j()("/"),
        X = {
          marginTop: "12vh",
          borderLeft: "1px solid grey",
          borderTop: "1px solid grey",
          borderRight: "1px solid grey",
        },
        F = {
          height: "68vh",
          borderLeft: "1px solid grey",
          borderTop: "1px solid white",
          borderRight: "1px solid grey",
          borderBottom: "1px solid grey",
        },
        J = (function (e) {
          Object(E.a)(a, e);
          var t = Object(A.a)(a);
          function a(e) {
            var n;
            Object(p.a)(this, a),
              ((n = t.call(this, e)).changeText = function () {
                var e = {
                  text: document.getElementById("notepad-text").value,
                  roomID: n.state.roomID,
                };
                n.setState({ text: e.text }), W.emit("updateNotepad", e);
              }),
              (n.giveTab = function (e) {
                var t = document.getElementById("notepad-text");
                if (9 === e.keyCode || 9 === e.which) {
                  e.preventDefault();
                  var a = t.selectionStart;
                  (t.value =
                    t.value.substring(0, t.selectionStart) +
                    "\t" +
                    t.value.substring(t.selectionEnd)),
                    (t.selectionEnd = a + 1);
                }
              }),
              (n.componentDidMount = function () {
                var e = new (0, window.webkitSpeechRecognition)();
                (e.continuous = !0),
                  (e.onresult = function (e) {
                    var t = e.resultIndex,
                      a = e.results[t][0].transcript;
                    document.getElementById("notepad-text").value += " " + a;
                  }),
                  (document.getElementById("record").onclick = function () {
                    "Start Recording" ===
                    document.getElementById("record").innerHTML
                      ? (e.start(),
                        (document.getElementById("record").innerHTML =
                          "Stop Recording"),
                        (document.getElementById(
                          "instructions-notepad"
                        ).innerHTML = "Speak to type !"))
                      : (e.stop(),
                        (document.getElementById("record").innerHTML =
                          "Start Recording"),
                        (document.getElementById(
                          "instructions-notepad"
                        ).innerHTML = ""));
                  }),
                  (document.getElementById("reset-text").onclick = function () {
                    document.getElementById("notepad-text").value = "";
                  });
              });
            var l = n.props.match.params.roomID;
            return (n.state = { text: "Type something here", roomID: l }), n;
          }
          return (
            Object(v.a)(a, [
              {
                key: "componentWillMount",
                value: function () {
                  var e = this;
                  W.emit("join", this.state.roomID, function (e) {
                    console.log(e);
                  }),
                    W.on("changeNotepad", function (t) {
                      e.setState({ text: t });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "content-wrapper mx-sm-5" },
                    l.a.createElement(
                      "div",
                      { className: "container mb-sm-5" },
                      l.a.createElement(
                        "nav",
                        {
                          className:
                            "navbar navbar-expand-sm navbar-light bg-light",
                          style: X,
                        },
                        l.a.createElement(
                          r.b,
                          { to: "/notepad", className: "navbar-brand" },
                          "NOTEPAD"
                        ),
                        l.a.createElement("span", {
                          id: "instructions-notepad",
                        }),
                        l.a.createElement(
                          "button",
                          {
                            className: "navbar-toggler ml-auto",
                            "data-toggle": "collapse",
                            "data-target": "#options-notepad",
                          },
                          l.a.createElement("span", {
                            className: "navbar-toggler-icon text-dark",
                          })
                        ),
                        l.a.createElement(
                          "div",
                          {
                            className: "collapse navbar-collapse",
                            id: "options-notepad",
                          },
                          l.a.createElement(
                            "ul",
                            { className: "navbar-nav text-center ml-auto" },
                            l.a.createElement(
                              "li",
                              {
                                className: "nav-item nav-link",
                                id: "reset-text",
                              },
                              "Reset"
                            ),
                            l.a.createElement(
                              "li",
                              { className: "nav-item nav-link", id: "record" },
                              "Start Recording"
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "input-group", style: { height: "68vh" } },
                        l.a.createElement("textarea", {
                          className: "form-control",
                          style: F,
                          "aria-label": "white textarea",
                          id: "notepad-text",
                          value: this.state.text,
                          onChange: this.changeText,
                          onKeyDown: this.giveTab,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        U = a(75),
        Y = a.n(U),
        Z =
          (a(155),
          a(156),
          a(157),
          a(158),
          a(159),
          a(160),
          a(161),
          a(162),
          a(163),
          a(165),
          a(166),
          a(167),
          a(168),
          a(169),
          a(171),
          a(172),
          a(173),
          a(174),
          a(175),
          a(176),
          a(177),
          a(178),
          a(179),
          j()("/")),
        G = {
          borderLeft: "1px solid grey",
          borderTop: "1px solid grey",
          borderRight: "1px solid grey",
        },
        _ = {
          width: "90vw",
          margin: "auto",
          paddingTop: "5vh",
          paddingBottom: "5vh",
        },
        $ = "";
      var ee = (function (e) {
        Object(E.a)(a, e);
        var t = Object(A.a)(a);
        function a(e) {
          var n;
          Object(p.a)(this, a),
            ((n = t.call(this, e)).onChange = function (e) {
              console.log(e);
              var t = { text: ($ = e), roomID: n.state.roomID };
              Z.emit("updateCodepadText", t);
            }),
            (n.changeLanguage = function (e) {
              n.setState({ language: e.currentTarget.innerHTML });
            }),
            (n.changeTheme = function (e) {
              n.setState({ theme: e.currentTarget.innerHTML });
            }),
            (n.updateOutput = function (e) {
              document.getElementById("generated-output").style.display =
                "block";
              var t = document.getElementById("input-text").value,
                a = { lang: n.state.language, code: $, input: t, save: !1 };
              fetch("/api/tools/getCodeOutput", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(a),
              })
                .then(function (e) {
                  return e.json();
                })
                .then(
                  function (e) {
                    document.getElementById("output-text").innerText = e;
                  },
                  function (e) {
                    console.log(JSON.stringify(e));
                  }
                );
            });
          var o = n.props.match.params.roomID;
          return (
            (n.state = {
              language: "Python3",
              theme: "github",
              roomID: o,
              codeText: "print('Hello World')",
            }),
            (n.editorRef = l.a.createRef()),
            n
          );
        }
        return (
          Object(v.a)(a, [
            {
              key: "componentDidMount",
              value: function () {
                Z.emit("join", this.state.roomID, function (e) {
                  console.log(e);
                }),
                  Z.on("changeCodepadText", function (e) {
                    $ = e;
                  });
              },
            },
            {
              key: "render",
              value: function () {
                return l.a.createElement(
                  "div",
                  { className: "row w-100" },
                  l.a.createElement(
                    "div",
                    { style: _ },
                    l.a.createElement(
                      "nav",
                      {
                        className:
                          "navbar navbar-expand-sm navbar-light bg-light",
                        style: G,
                      },
                      l.a.createElement(
                        r.b,
                        { to: "/codepad", className: "navbar-brand" },
                        "CODEPAD"
                      ),
                      l.a.createElement("span", null, this.state.language),
                      l.a.createElement("span", null, "-"),
                      l.a.createElement("span", null, this.state.theme),
                      l.a.createElement(
                        "button",
                        {
                          className: "navbar-toggler ml-auto",
                          "data-toggle": "collapse",
                          "data-target": "#options-notepad",
                        },
                        l.a.createElement("span", {
                          className: "navbar-toggler-icon text-dark",
                        })
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "collapse navbar-collapse",
                          id: "options-notepad",
                        },
                        l.a.createElement(
                          "ul",
                          { className: "navbar-nav text-center ml-auto" },
                          l.a.createElement(
                            "li",
                            {
                              className: "nav-item nav-link",
                              onClick: this.updateOutput,
                            },
                            l.a.createElement("div", {
                              className: "spinner-border text-danger",
                            }),
                            l.a.createElement("span", null, "Run")
                          ),
                          l.a.createElement(
                            "li",
                            { className: "nav-item dropdown" },
                            l.a.createElement(
                              "a",
                              {
                                href: "#",
                                className: "nav-link dropdown-toggle",
                                "data-toggle": "dropdown",
                              },
                              "Languages"
                            ),
                            l.a.createElement(
                              "div",
                              {
                                className: "dropdown-menu",
                                style: { maxHeight: "30vh", overflowY: "auto" },
                              },
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "C"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Cpp"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Cpp14"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Csharp"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Java"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Perl"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "PHP"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Python"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Python3"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Scala"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "HTML and JS"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "XML"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Ruby"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Sass"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Markdown"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Mysql"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Json"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Handlebars"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Golang"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Coffee"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeLanguage,
                                },
                                "Css"
                              )
                            )
                          ),
                          l.a.createElement(
                            "li",
                            { className: "nav-item dropdown" },
                            l.a.createElement(
                              "a",
                              {
                                href: "#",
                                className: "nav-link dropdown-toggle",
                                "data-toggle": "dropdown",
                              },
                              "Themes"
                            ),
                            l.a.createElement(
                              "div",
                              {
                                className: "dropdown-menu",
                                style: { maxHeight: "30vh", overflowY: "auto" },
                              },
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeTheme,
                                },
                                "monokai"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeTheme,
                                },
                                "github"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeTheme,
                                },
                                "tommorow"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeTheme,
                                },
                                "kuror"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeTheme,
                                },
                                "twilight"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeTheme,
                                },
                                "xcode"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeTheme,
                                },
                                "textmate"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "dropdown-item",
                                  onClick: this.changeTheme,
                                },
                                "terminal"
                              )
                            )
                          )
                        )
                      )
                    ),
                    l.a.createElement(Y.a, {
                      mode:
                        ((e = this.state.language),
                        "C" === e || "Cpp" === e || "Cpp14" === e
                          ? "java"
                          : "Csharp" === e
                          ? "csharp"
                          : "Java" === e
                          ? "java"
                          : "Perl" === e
                          ? "python"
                          : "PHP" === e
                          ? "html"
                          : "Python" === e || "Python3" === e || "Scala" === e
                          ? "python"
                          : "HTML and JS" === e
                          ? "html"
                          : "XML" === e
                          ? "xml"
                          : "Ruby" === e
                          ? "ruby"
                          : "Sass" === e
                          ? "sass"
                          : "Markdown" === e
                          ? "markdown"
                          : "Mysql" === e
                          ? "mysql"
                          : "Json" === e
                          ? "json"
                          : "Handlebars" === e
                          ? "handlebars"
                          : "Golang" === e
                          ? "golang"
                          : "Coffee" === e
                          ? "coffee"
                          : "Css" === e
                          ? "css"
                          : void 0),
                      theme: this.state.theme,
                      onChange: this.onChange,
                      name: "code-text",
                      ref: this.editorRef,
                      editorProps: { $blockScrolling: !0 },
                      style: {
                        width: "100%",
                        fontSize: "1rem",
                        borderBottom: "1px solid black",
                        borderLeft: "1px solid grey",
                        borderRight: "1px solid grey",
                      },
                    }),
                    l.a.createElement(
                      "div",
                      { className: "col-lg-12 mt-5" },
                      l.a.createElement(
                        "div",
                        { className: "form-group from-group-info-page mt-3" },
                        l.a.createElement(
                          "p",
                          { className: "text-center" },
                          "Enter Input : "
                        ),
                        l.a.createElement("textarea", {
                          className: "form-control",
                          id: "input-text",
                        })
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "col-lg-12 mt-5",
                        id: "generated-output",
                        style: { display: "none" },
                      },
                      l.a.createElement(
                        "div",
                        { className: "form-group from-group-info-page mt-3" },
                        l.a.createElement(
                          "p",
                          { className: "text-center" },
                          "Output is : "
                        ),
                        l.a.createElement(
                          "p",
                          { className: "form-control", id: "output-text" },
                          this.state.output
                        )
                      )
                    )
                  )
                );
                var e;
              },
            },
          ]),
          a
        );
      })(n.Component);
      function te() {
        return l.a.createElement(
          "div",
          null,
          l.a.createElement("h1", null, "This is note video tool.")
        );
      }
      function ae() {
        return l.a.createElement(
          "div",
          null,
          l.a.createElement("h1", null, "This is code video tool")
        );
      }
      function ne() {
        return l.a.createElement(
          "div",
          null,
          l.a.createElement("h1", null, "This is powerhouse tool")
        );
      }
      a(180);
      function le() {
        return l.a.createElement(
          "div",
          { className: "content-wrapper-fixed" },
          l.a.createElement(
            "div",
            { className: "container text-center" },
            l.a.createElement("img", {
              src: "images/oops.jpg",
              alt: "OOPS!",
              className: "error-img",
            }),
            l.a.createElement(
              "h4",
              { className: "text-center error-header" },
              "The page you were looking for has been remove, had it's name changed or is temporary unavailable."
            ),
            l.a.createElement(
              r.b,
              { to: "/" },
              l.a.createElement(
                "p",
                {
                  className: "btn btn-primary py-2 px-4 btn-6c error-home-btn",
                  href: "/",
                  role: "button",
                },
                "Go to home page"
              )
            )
          )
        );
      }
      var oe = j()("/");
      var ce = function () {
        return (
          Object(n.useEffect)(function () {
            oe.on("testingSC", function () {
              console.log("Connected to socket server backend"),
                oe.emit("testingCS");
            });
          }, []),
          l.a.createElement(
            "div",
            { className: "App" },
            l.a.createElement(
              f,
              null,
              l.a.createElement(
                r.a,
                null,
                l.a.createElement(g, null),
                l.a.createElement("div", { style: { marginTop: "56px" } }),
                l.a.createElement(
                  i.d,
                  null,
                  l.a.createElement(
                    i.b,
                    { path: "/", exact: !0 },
                    l.a.createElement(b, null),
                    l.a.createElement(
                      "div",
                      { className: "pt-5 ml-5 mr-3 mb-5" },
                      l.a.createElement(
                        "div",
                        { className: "row mx-0" },
                        l.a.createElement(y, null),
                        l.a.createElement(w, null)
                      )
                    )
                  ),
                  l.a.createElement(i.b, {
                    path: "/videocall",
                    component: k,
                    exact: !0,
                  }),
                  l.a.createElement(i.b, {
                    path: "/notepad",
                    component: N,
                    exact: !0,
                  }),
                  l.a.createElement(i.b, {
                    path: "/codepad",
                    component: x,
                    exact: !0,
                  }),
                  l.a.createElement(i.b, {
                    path: "/note-video",
                    component: C,
                    exact: !0,
                  }),
                  l.a.createElement(i.b, {
                    path: "/code-video",
                    component: B,
                    exact: !0,
                  }),
                  l.a.createElement(i.b, {
                    path: "/powerhouse",
                    component: L,
                    exact: !0,
                  }),
                  l.a.createElement(i.b, {
                    path: "/tools/videocall/:roomID",
                    component: q,
                  }),
                  l.a.createElement(i.b, {
                    path: "/tools/notepad/:roomID",
                    component: J,
                  }),
                  l.a.createElement(i.b, {
                    path: "/tools/codepad/:roomID",
                    component: ee,
                  }),
                  l.a.createElement(i.b, {
                    path: "/tools/note-video/:roomID",
                    component: te,
                  }),
                  l.a.createElement(i.b, {
                    path: "/tools/code-video/:roomID",
                    component: ae,
                  }),
                  l.a.createElement(i.b, {
                    path: "/tools/powerhouse/:roomID",
                    component: ne,
                  }),
                  l.a.createElement(i.b, {
                    path: "/error",
                    component: le,
                    exact: !0,
                  }),
                  l.a.createElement(
                    i.b,
                    { component: le },
                    l.a.createElement(i.a, { to: "/error" })
                  )
                ),
                l.a.createElement(d, null)
              )
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(
        l.a.createElement(l.a.StrictMode, null, l.a.createElement(ce, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    19: function (e, t, a) {},
    77: function (e, t, a) {
      e.exports = a(181);
    },
    82: function (e, t, a) {},
  },
  [[77, 1, 2]],
]);
//# sourceMappingURL=main.9633c7d2.chunk.js.map
