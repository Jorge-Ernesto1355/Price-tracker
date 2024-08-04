import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

function ErrorCategoryPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-90 relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="text-center p-8 bg-gray-900 bg-opacity-70 rounded-lg shadow-lg z-10 max-w-md w-full mx-4">
        <h1
          className="text-6xl font-bold text-white mb-2 glitch"
          data-text="Error 404"
        >
          Error 404
        </h1>
        <p className="text-xl text-blue-300 mb-6">
          ¡Ups! Parece que te has adentrado en el ciberespacio desconocido.
        </p>
        <p className="text-md text-gray-400 mb-8">
          La categoría que buscas no existe en esta dimensión digital.
        </p>
        <Link to="/">
          <button className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white opacity-10 rounded-md"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative flex items-center">
              <HomeOutlined className="mr-2" />
              Volver al inicio
            </span>
          </button>
        </Link>
      </div>

      <style>{`
        .glitch {
          position: relative;
          animation: glitch 1s linear infinite;
        }

        @keyframes glitch {
          2%, 64% {
            transform: translate(2px, 0) skew(0deg);
          }
          4%, 60% {
            transform: translate(-2px, 0) skew(0deg);
          }
          62% {
            transform: translate(0, 0) skew(5deg);
          }
        }

        .glitch:before,
        .glitch:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch:before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        .glitch:after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% {
            clip: rect(59px, 9999px, 90px, 0);
            transform: skew(0.5deg);
          }
          5% {
            clip: rect(45px, 9999px, 54px, 0);
            transform: skew(0.65deg);
          }
          10% {
            clip: rect(35px, 9999px, 7px, 0);
            transform: skew(0.15deg);
          }
          15% {
            clip: rect(90px, 9999px, 17px, 0);
            transform: skew(0.85deg);
          }
          20% {
            clip: rect(94px, 9999px, 84px, 0);
            transform: skew(0.35deg);
          }
          25% {
            clip: rect(47px, 9999px, 59px, 0);
            transform: skew(0.75deg);
          }
          30% {
            clip: rect(57px, 9999px, 28px, 0);
            transform: skew(0.25deg);
          }
          35% {
            clip: rect(10px, 9999px, 90px, 0);
            transform: skew(0.55deg);
          }
          40% {
            clip: rect(42px, 9999px, 13px, 0);
            transform: skew(0.45deg);
          }
          45% {
            clip: rect(60px, 9999px, 34px, 0);
            transform: skew(0.05deg);
          }
          50% {
            clip: rect(34px, 9999px, 65px, 0);
            transform: skew(0.95deg);
          }
          55% {
            clip: rect(23px, 9999px, 80px, 0);
            transform: skew(0.3deg);
          }
          60% {
            clip: rect(85px, 9999px, 9px, 0);
            transform: skew(0.7deg);
          }
          65% {
            clip: rect(73px, 9999px, 20px, 0);
            transform: skew(0.1deg);
          }
          70% {
            clip: rect(53px, 9999px, 86px, 0);
            transform: skew(0.8deg);
          }
          75% {
            clip: rect(84px, 9999px, 96px, 0);
            transform: skew(0.2deg);
          }
          80% {
            clip: rect(9px, 9999px, 27px, 0);
            transform: skew(0.6deg);
          }
          85% {
            clip: rect(56px, 9999px, 98px, 0);
            transform: skew(0.4deg);
          }
          90% {
            clip: rect(18px, 9999px, 46px, 0);
            transform: skew(0.9deg);
          }
          95% {
            clip: rect(77px, 9999px, 61px, 0);
            transform: skew(0.5deg);
          }
          100% {
            clip: rect(67px, 9999px, 71px, 0);
            transform: skew(0.75deg);
          }
        }

        @keyframes glitch-anim2 {
          0% {
            clip: rect(65px, 9999px, 99px, 0);
            transform: skew(0.6deg);
          }
          5% {
            clip: rect(86px, 9999px, 36px, 0);
            transform: skew(0.15deg);
          }
          10% {
            clip: rect(24px, 9999px, 40px, 0);
            transform: skew(0.8deg);
          }
          15% {
            clip: rect(46px, 9999px, 91px, 0);
            transform: skew(0.35deg);
          }
          20% {
            clip: rect(13px, 9999px, 97px, 0);
            transform: skew(0.7deg);
          }
          25% {
            clip: rect(89px, 9999px, 24px, 0);
            transform: skew(0.25deg);
          }
          30% {
            clip: rect(54px, 9999px, 82px, 0);
            transform: skew(0.55deg);
          }
          35% {
            clip: rect(69px, 9999px, 43px, 0);
            transform: skew(0.9deg);
          }
          40% {
            clip: rect(26px, 9999px, 56px, 0);
            transform: skew(0.45deg);
          }
          45% {
            clip: rect(44px, 9999px, 76px, 0);
            transform: skew(0.05deg);
          }
          50% {
            clip: rect(35px, 9999px, 87px, 0);
            transform: skew(0.75deg);
          }
          55% {
            clip: rect(79px, 9999px, 16px, 0);
            transform: skew(0.3deg);
          }
          60% {
            clip: rect(68px, 9999px, 95px, 0);
            transform: skew(0.65deg);
          }
          65% {
            clip: rect(93px, 9999px, 49px, 0);
            transform: skew(0.1deg);
          }
          70% {
            clip: rect(59px, 9999px, 26px, 0);
            transform: skew(0.85deg);
          }
          75% {
            clip: rect(94px, 9999px, 15px, 0);
            transform: skew(0.2deg);
          }
          80% {
            clip: rect(10px, 9999px, 89px, 0);
            transform: skew(0.5deg);
          }
          85% {
            clip: rect(3px, 9999px, 51px, 0);
            transform: skew(0.4deg);
          }
          90% {
            clip: rect(38px, 9999px, 19px, 0);
            transform: skew(0.95deg);
          }
          95% {
            clip: rect(99px, 9999px, 64px, 0);
            transform: skew(0.6deg);
          }
          100% {
            clip: rect(72px, 9999px, 86px, 0);
            transform: skew(0.75deg);
          }
        }
      `}</style>
    </div>
  );
}

export default ErrorCategoryPage;
