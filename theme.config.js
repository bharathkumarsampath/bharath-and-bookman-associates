import { useRouter } from "next/router";

const Logo = ({ height }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 200C0 89.543 89.5431 0 200 0H300C410.457 0 500 89.5431 500 200V300C500 410.457 410.457 500 300 500H0V200Z"
      fill="#151515"
    />
    <path
      d="M156.588 177.141C156.588 165.843 156.047 158.275 154.965 154.435C153.883 150.487 151.772 148.512 148.634 148.512C145.496 148.512 142.683 150.596 140.194 154.765C137.705 158.823 136.46 164.308 136.46 171.218V201.328C136.46 206.045 137.38 210.048 139.22 213.339C141.059 216.63 143.765 218.275 147.336 218.275C150.907 218.275 153.341 215.862 154.64 211.035C155.939 206.209 156.588 197.763 156.588 185.697V177.141ZM136.136 143.083V156.081C140.356 146.318 147.823 141.437 158.536 141.437C167.842 141.437 175.038 144.838 180.124 151.638C185.318 158.439 187.915 168.75 187.915 182.571C187.915 196.392 185.102 206.593 179.475 213.174C173.956 219.756 165.623 223.047 154.478 223.047C149.284 223.047 145.388 222.388 142.791 221.072C140.194 219.756 138.084 217.727 136.46 214.984V257.599H157.399V260.56H97.342V257.599H106.269V146.044H97.6666V143.083H136.136Z"
      fill="white"
    />
    <path
      d="M192.118 98H231.885V218.44H240.975V221.401H192.767V218.44H201.694V100.962H192.118V98Z"
      fill="white"
    />
    <path
      d="M296.554 188.988V175.002C296.554 164.362 295.958 156.629 294.768 151.803C293.686 146.867 291.089 144.399 286.977 144.399C284.596 144.399 282.648 145.112 281.133 146.538C279.727 147.854 278.699 150.103 278.049 153.284C277.075 158.22 276.588 165.734 276.588 175.825V188.659C276.588 200.615 276.913 207.8 277.562 210.213C278.32 212.626 279.077 214.6 279.835 216.136C281.025 218.769 283.352 220.085 286.814 220.085C291.035 220.085 293.794 217.617 295.093 212.681C296.067 209.171 296.554 201.273 296.554 188.988ZM286.49 223.047C272.963 223.047 262.737 219.536 255.812 212.516C248.886 205.496 245.424 195.46 245.424 182.406C245.424 169.244 249.103 159.152 256.461 152.132C263.928 145.002 274.37 141.437 287.788 141.437C301.207 141.437 311.216 144.728 317.817 151.309C324.418 157.781 327.718 167.708 327.718 181.09C327.718 209.061 313.976 223.047 286.49 223.047Z"
      fill="white"
    />
    <path
      d="M340.374 197.873V146.044H331.447V143.083H340.374V121.858L370.565 114.289V143.083H391.666V146.044H370.565V201.492C370.565 206.648 371.052 210.432 372.026 212.845C373.108 215.259 375.272 216.465 378.519 216.465C381.765 216.465 384.579 214.82 386.959 211.529C389.448 208.238 391.071 203.741 391.829 198.037L394.588 198.366C393.722 205.935 391.342 211.968 387.446 216.465C383.551 220.853 377.112 223.047 368.13 223.047C359.149 223.047 352.277 221.237 347.516 217.617C342.755 213.997 340.374 207.416 340.374 197.873Z"
      fill="white"
    />
    <path
      d="M63.9275 355.826V303.998H55V301.036H63.9275V279.811L94.1185 272.242V301.036H115.22V303.998H94.1185V359.446C94.1185 364.601 94.6054 368.386 95.5793 370.799C96.6614 373.212 98.8257 374.419 102.072 374.419C105.318 374.419 108.132 372.773 110.513 369.483C113.001 366.192 114.625 361.695 115.382 355.991L118.141 356.32C117.276 363.888 114.895 369.921 110.999 374.419C107.104 378.806 100.665 381 91.6837 381C82.7022 381 75.8307 379.19 71.0694 375.57C66.3081 371.951 63.9275 365.369 63.9275 355.826Z"
      fill="white"
    />
    <path
      d="M277.338 289.683C271.603 289.683 267.491 288.202 265.002 285.241C262.621 282.279 261.431 278.604 261.431 274.217C261.431 269.829 262.729 266.21 265.326 263.358C268.032 260.506 272.09 259.08 277.5 259.08C282.911 259.08 287.023 260.396 289.836 263.029C292.65 265.551 294.057 269.226 294.057 274.052C294.057 278.769 292.704 282.553 289.999 285.405C287.293 288.257 283.073 289.683 277.338 289.683ZM252.828 301.036H292.596V376.393H301.686V379.355H253.477V376.393H262.405V303.998H252.828V301.036Z"
      fill="white"
    />
    <path
      d="M308.727 381V351.548H310.675C313.489 361.091 317.276 367.782 322.037 371.622C326.799 375.461 332.75 377.38 339.892 377.38C350.93 377.38 356.449 373.815 356.449 366.685C356.449 363.614 355.096 361.311 352.391 359.775C348.17 357.362 342.76 355.497 336.159 354.181C328.801 352.206 322.633 349.574 317.655 346.283C311.703 342.334 308.727 336.082 308.727 327.526C308.727 318.97 311.324 312.17 316.519 307.124C321.713 301.968 328.638 299.391 337.295 299.391C342.598 299.391 348.062 300.652 353.689 303.175C355.745 304.053 357.314 304.491 358.396 304.491C359.479 304.491 360.398 304.107 361.156 303.34C361.913 302.572 362.833 301.146 363.915 299.062H365.701V324.235H363.753C358.234 309.976 349.685 302.846 338.107 302.846C333.021 302.846 329.233 303.778 326.745 305.643C324.256 307.398 323.011 309.647 323.011 312.389C323.011 314.034 323.39 315.351 324.147 316.338C324.905 317.215 325.5 317.873 325.933 318.312C326.366 318.751 327.069 319.245 328.043 319.793C329.017 320.232 329.829 320.616 330.478 320.945C331.127 321.164 332.101 321.493 333.4 321.932C334.806 322.371 335.834 322.645 336.484 322.755C343.842 324.619 349.144 326.265 352.391 327.691C355.637 329.007 358.721 330.652 361.643 332.627C367.594 336.795 370.57 343.541 370.57 352.865C370.57 362.079 367.865 369.099 362.454 373.925C357.044 378.642 349.631 381 340.217 381C333.508 381 327.015 379.41 320.739 376.229C319.44 375.351 318.412 374.912 317.655 374.912C315.274 374.912 312.948 376.941 310.675 381H308.727Z"
      fill="white"
    />
    <path
      d="M381.905 355.826V303.998H372.977V301.036H381.905V279.811L412.096 272.242V301.036H433.197V303.998H412.096V359.446C412.096 364.601 412.582 368.386 413.556 370.799C414.639 373.212 416.803 374.419 420.049 374.419C423.295 374.419 426.109 372.773 428.49 369.483C430.978 366.192 432.602 361.695 433.359 355.991L436.119 356.32C435.253 363.888 432.872 369.921 428.977 374.419C425.081 378.806 418.642 381 409.661 381C400.679 381 393.808 379.19 389.047 375.57C384.285 371.951 381.905 365.369 381.905 355.826Z"
      fill="white"
    />
    <path
      d="M192.611 303.998V301.036H150.733V303.998H157.388L142.779 359.446L128.333 303.998H139.533V301.036H117.62V303.998H124.438L143.916 379.355H166.153L180.275 328.842L195.533 379.355H217.283L241.306 303.998H248.61V301.036H199.428V303.998H209.167L194.234 359.939L182.547 321.438L186.605 303.998H192.611Z"
      fill="white"
    />
  </svg>
);

export default {
  projectLink: "https://github.com/bharathkumarsampath/bharath-and-bookman-associates",
  docsRepositoryBase:
    "https://github.com/bharathkumarsampath/bharath-and-bookman-associates/blob/master/pages",
  titleSuffix: " – Bharath and Bookman Associates",
  search: false,
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        {/* <Logo height={12} /> */}
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title="Bharath and Bookman Associates"
        >
          Bharath and Bookman Associates
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    const { route } = useRouter();

    meta = meta || {};

    // Safely access the image property with a fallback
    const ogImage = (meta && meta.image) || `https://og-image.vercel.app/${encodeURIComponent(title || 'Default Title')}.png`;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/s.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "Bharath and Bookman Associates is a consultancy providing a wide range of engineering services including strategy, supplay chain, engineering, optimization, project management and quality assurance."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "Bharath and Bookman Associates is a consultancy providing a wide range of engineering services including strategy, supplay chain, engineering, optimization, project management and quality assurance."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title
              ? title + " – Bharath and Bookman Associates"
              : "Bharath and Bookman Associates"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta
          name="apple-mobile-web-app-title"
          content="Bharath and Bookman Associates"
        />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "zh-CN":
        return "在 GitHub 上编辑本页 →";
      case "es-ES":
        return "Edite esta página en GitHub →";
      case "pt-BR":
        return "Edite essa página no GitHub →";
      case "ja":
        return "Github で編集する →";
      case "ko":
        return "Github에서 이 페이지 편집하기 →";
      case "ru":
        return "Редактировать на GitHub →";
      default:
        return "Edit this page on GitHub →";
    }
  },
  footerText: ({ locale }) => {
    return (
      <span className="inline-flex items-center no-underline text-current font-semibold">
        Copyright {new Date().getFullYear()} © Bharath and Bookman Associates
        LLC.
      </span>
    );
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "hu-HU", text: "Magyar" },
  ],
};
