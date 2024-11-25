"use client";

import { cn } from "@/lib/utils";
import {
  ComponentProps,
  useId,
  ElementRef,
  forwardRef,
  useState,
  useMemo,
  ReactNode,
} from "react";
import { useApp } from "@/components/app/provider";
import { cva } from "class-variance-authority";
import { AnimatePresence, motion } from "motion/react";
import { Message, Message as MessageType } from "@/lib/types";
import styles from "../styles.module.css";
import { DateTime } from "luxon";
import { DateValue } from "react-aria-components";

export default function (
  props: {
    name?: string;
    avatar?: string;
  } & ComponentProps<"div">
) {
  const { className, name, avatar, ...rest } = props;

  const id = useId();

  return (
    <>
      <foreignObject width="450" height="920">
        <div className="grid grid-cols-1 grid-rows-1 w-full h-full bg-[var(--screen-background)] text-[var(--primary-label)]">
          <div
            {...rest}
            className={cn("w-full h-full col-start-1 row-start-1", className)}
          />
          {/* Navigation Bar Blur Effect */}
          <div className="w-full h-[162px] backdrop-blur-[25px] col-start-1 row-start-1" />
        </div>
      </foreignObject>
      {/* Input Bar */}
      <g>
        <rect
          width="402"
          height="54"
          transform="translate(24 815)"
          fill="white"
        />
        {/* Plus Button */}
        <g>
          <rect
            x="38"
            y="820"
            width="34"
            height="34"
            rx="17"
            fill="#787880"
            fill-opacity="0.16"
          />
          <path
            d="M48.0522 837.007C48.0522 836.752 48.1436 836.534 48.3262 836.351C48.5088 836.163 48.7274 836.069 48.9819 836.069H54.0703V830.989C54.0703 830.734 54.1616 830.516 54.3442 830.333C54.5269 830.15 54.7454 830.059 55 830.059C55.2601 830.059 55.4814 830.15 55.6641 830.333C55.8467 830.516 55.938 830.734 55.938 830.989V836.069H61.0181C61.2726 836.069 61.4912 836.163 61.6738 836.351C61.8564 836.534 61.9478 836.752 61.9478 837.007C61.9478 837.267 61.8564 837.488 61.6738 837.671C61.4912 837.848 61.2726 837.937 61.0181 837.937H55.938V843.033C55.938 843.282 55.8467 843.498 55.6641 843.681C55.4814 843.863 55.2601 843.955 55 843.955C54.7454 843.955 54.5269 843.863 54.3442 843.681C54.1616 843.498 54.0703 843.282 54.0703 843.033V837.937H48.9819C48.7274 837.937 48.5088 837.848 48.3262 837.671C48.1436 837.488 48.0522 837.267 48.0522 837.007Z"
            fill="#3C3C43"
            fill-opacity="0.6"
          />
        </g>
        {/* Input */}
        <g>
          <rect
            x="85.5"
            y="819.5"
            width="324"
            height="34"
            rx="16.5"
            stroke="#C6C6C8"
          />
          <path
            d="M98.3779 843V834.052H99.8223V843H98.3779ZM99.1084 832.325C98.8372 832.325 98.6021 832.228 98.4028 832.035C98.2091 831.835 98.1123 831.6 98.1123 831.329C98.1123 831.052 98.2091 830.817 98.4028 830.624C98.6021 830.43 98.8372 830.333 99.1084 830.333C99.3851 830.333 99.6203 830.43 99.814 830.624C100.008 830.817 100.104 831.052 100.104 831.329C100.104 831.6 100.008 831.835 99.814 832.035C99.6203 832.228 99.3851 832.325 99.1084 832.325ZM102.728 843V831.022H104.462L108.563 841.016H108.696L112.796 831.022H114.531V843H113.137V833.853H112.406L114.083 831.354L109.26 843H107.999L103.184 831.354L104.853 833.853H104.122V843H102.728ZM121.056 843.158C120.203 843.158 119.47 842.97 118.856 842.593C118.247 842.217 117.777 841.686 117.445 841C117.118 840.308 116.955 839.494 116.955 838.559V838.551C116.955 837.627 117.118 836.816 117.445 836.119C117.777 835.421 118.244 834.876 118.848 834.483C119.451 834.09 120.156 833.894 120.964 833.894C121.778 833.894 122.475 834.082 123.056 834.458C123.643 834.835 124.091 835.361 124.401 836.036C124.716 836.705 124.874 837.486 124.874 838.376V838.941H117.702V837.787H124.135L123.421 838.841V838.269C123.421 837.566 123.316 836.987 123.106 836.534C122.896 836.08 122.605 835.742 122.234 835.521C121.864 835.294 121.438 835.181 120.956 835.181C120.475 835.181 120.043 835.3 119.661 835.538C119.285 835.77 118.986 836.116 118.765 836.575C118.543 837.035 118.433 837.599 118.433 838.269V838.841C118.433 839.478 118.541 840.023 118.756 840.477C118.972 840.925 119.279 841.271 119.678 841.514C120.076 841.752 120.547 841.871 121.089 841.871C121.493 841.871 121.844 841.816 122.143 841.705C122.442 841.594 122.688 841.453 122.882 841.282C123.076 841.11 123.211 840.936 123.289 840.759L123.322 840.684H124.766L124.75 840.75C124.672 841.055 124.534 841.351 124.334 841.639C124.141 841.921 123.889 842.178 123.579 842.411C123.269 842.638 122.901 842.82 122.475 842.958C122.055 843.091 121.581 843.158 121.056 843.158ZM130.187 843.158C129.522 843.158 128.936 843.058 128.427 842.859C127.918 842.654 127.508 842.369 127.198 842.004C126.894 841.639 126.714 841.21 126.659 840.717H128.136C128.258 841.088 128.496 841.387 128.85 841.614C129.204 841.841 129.666 841.954 130.236 841.954C130.64 841.954 130.994 841.896 131.299 841.78C131.609 841.658 131.852 841.495 132.029 841.29C132.206 841.08 132.295 840.839 132.295 840.568V840.551C132.295 840.247 132.173 839.99 131.93 839.779C131.686 839.563 131.288 839.389 130.734 839.256L129.348 838.924C128.789 838.792 128.33 838.62 127.97 838.41C127.611 838.194 127.345 837.931 127.173 837.621C127.002 837.306 126.916 836.935 126.916 836.509V836.5C126.916 836.002 127.06 835.557 127.348 835.164C127.641 834.771 128.039 834.461 128.543 834.234C129.047 834.007 129.614 833.894 130.245 833.894C130.87 833.894 131.423 833.994 131.905 834.193C132.392 834.387 132.782 834.663 133.075 835.023C133.374 835.383 133.557 835.806 133.623 836.293H132.204C132.11 835.939 131.894 835.651 131.556 835.43C131.219 835.208 130.779 835.098 130.236 835.098C129.882 835.098 129.567 835.156 129.29 835.272C129.013 835.383 128.795 835.538 128.634 835.737C128.474 835.936 128.394 836.168 128.394 836.434V836.451C128.394 836.65 128.446 836.827 128.551 836.982C128.656 837.137 128.82 837.272 129.041 837.389C129.262 837.505 129.547 837.607 129.896 837.696L131.274 838.028C132.115 838.233 132.74 838.526 133.15 838.908C133.565 839.29 133.772 839.801 133.772 840.443V840.46C133.772 840.991 133.615 841.462 133.299 841.871C132.984 842.275 132.555 842.59 132.013 842.817C131.476 843.044 130.867 843.158 130.187 843.158ZM138.919 843.158C138.255 843.158 137.668 843.058 137.159 842.859C136.65 842.654 136.241 842.369 135.931 842.004C135.626 841.639 135.446 841.21 135.391 840.717H136.869C136.99 841.088 137.228 841.387 137.583 841.614C137.937 841.841 138.399 841.954 138.969 841.954C139.373 841.954 139.727 841.896 140.031 841.78C140.341 841.658 140.585 841.495 140.762 841.29C140.939 841.08 141.027 840.839 141.027 840.568V840.551C141.027 840.247 140.906 839.99 140.662 839.779C140.419 839.563 140.02 839.389 139.467 839.256L138.081 838.924C137.522 838.792 137.062 838.62 136.703 838.41C136.343 838.194 136.077 837.931 135.906 837.621C135.734 837.306 135.648 836.935 135.648 836.509V836.5C135.648 836.002 135.792 835.557 136.08 835.164C136.373 834.771 136.772 834.461 137.275 834.234C137.779 834.007 138.346 833.894 138.977 833.894C139.602 833.894 140.156 833.994 140.637 834.193C141.124 834.387 141.514 834.663 141.808 835.023C142.106 835.383 142.289 835.806 142.355 836.293H140.936C140.842 835.939 140.626 835.651 140.289 835.43C139.951 835.208 139.511 835.098 138.969 835.098C138.615 835.098 138.299 835.156 138.022 835.272C137.746 835.383 137.527 835.538 137.367 835.737C137.206 835.936 137.126 836.168 137.126 836.434V836.451C137.126 836.65 137.179 836.827 137.284 836.982C137.389 837.137 137.552 837.272 137.773 837.389C137.995 837.505 138.28 837.607 138.628 837.696L140.006 838.028C140.847 838.233 141.473 838.526 141.882 838.908C142.297 839.29 142.505 839.801 142.505 840.443V840.46C142.505 840.991 142.347 841.462 142.032 841.871C141.716 842.275 141.287 842.59 140.745 842.817C140.208 843.044 139.6 843.158 138.919 843.158ZM147.203 843.158C146.639 843.158 146.13 843.05 145.676 842.834C145.228 842.618 144.871 842.311 144.605 841.913C144.345 841.514 144.215 841.044 144.215 840.501V840.485C144.215 839.954 144.342 839.5 144.597 839.124C144.851 838.742 145.222 838.443 145.709 838.227C146.196 838.011 146.785 837.884 147.477 837.845L150.764 837.646V838.8L147.651 838.999C146.971 839.038 146.473 839.179 146.157 839.422C145.847 839.666 145.692 840.009 145.692 840.452V840.468C145.692 840.922 145.864 841.276 146.207 841.531C146.55 841.78 146.982 841.904 147.502 841.904C147.994 841.904 148.432 841.807 148.813 841.614C149.195 841.415 149.494 841.146 149.71 840.809C149.931 840.471 150.042 840.089 150.042 839.663V836.874C150.042 836.321 149.873 835.9 149.536 835.612C149.204 835.319 148.703 835.172 148.033 835.172C147.496 835.172 147.056 835.269 146.713 835.463C146.37 835.651 146.141 835.919 146.024 836.268L146.016 836.293H144.572L144.58 836.243C144.658 835.773 144.851 835.363 145.161 835.015C145.477 834.66 145.883 834.387 146.381 834.193C146.879 833.994 147.447 833.894 148.083 833.894C148.813 833.894 149.431 834.013 149.934 834.251C150.443 834.489 150.828 834.832 151.088 835.28C151.354 835.723 151.486 836.254 151.486 836.874V843H150.042V841.68H149.909C149.721 841.996 149.491 842.264 149.22 842.485C148.955 842.707 148.653 842.875 148.315 842.992C147.978 843.102 147.607 843.158 147.203 843.158ZM157.812 846.154C157.092 846.154 156.464 846.052 155.927 845.847C155.39 845.648 154.962 845.363 154.641 844.992C154.325 844.627 154.129 844.201 154.051 843.714L154.068 843.706H155.562L155.57 843.714C155.648 844.051 155.88 844.328 156.268 844.544C156.655 844.765 157.17 844.876 157.812 844.876C158.614 844.876 159.239 844.693 159.688 844.328C160.141 843.968 160.368 843.459 160.368 842.801V840.991H160.235C160.047 841.318 159.812 841.597 159.53 841.83C159.248 842.062 158.929 842.239 158.575 842.361C158.221 842.477 157.839 842.535 157.43 842.535C156.66 842.535 155.994 842.353 155.429 841.987C154.87 841.617 154.439 841.107 154.134 840.46C153.83 839.812 153.678 839.071 153.678 838.235V838.219C153.678 837.383 153.83 836.642 154.134 835.994C154.444 835.341 154.881 834.829 155.446 834.458C156.01 834.082 156.683 833.894 157.463 833.894C157.883 833.894 158.271 833.96 158.625 834.093C158.979 834.226 159.292 834.414 159.563 834.658C159.84 834.901 160.069 835.192 160.252 835.529H160.352V834.052H161.796V842.875C161.796 843.54 161.633 844.118 161.306 844.61C160.985 845.103 160.526 845.482 159.928 845.748C159.331 846.019 158.625 846.154 157.812 846.154ZM157.745 841.257C158.299 841.257 158.772 841.13 159.165 840.875C159.563 840.615 159.867 840.258 160.078 839.804C160.293 839.35 160.401 838.827 160.401 838.235V838.219C160.401 837.627 160.293 837.101 160.078 836.642C159.867 836.182 159.563 835.823 159.165 835.562C158.772 835.302 158.299 835.172 157.745 835.172C157.192 835.172 156.721 835.302 156.334 835.562C155.952 835.823 155.659 836.182 155.454 836.642C155.255 837.101 155.155 837.627 155.155 838.219V838.235C155.155 838.827 155.255 839.35 155.454 839.804C155.659 840.258 155.952 840.615 156.334 840.875C156.721 841.13 157.192 841.257 157.745 841.257ZM168.138 843.158C167.285 843.158 166.552 842.97 165.938 842.593C165.329 842.217 164.859 841.686 164.527 841C164.2 840.308 164.037 839.494 164.037 838.559V838.551C164.037 837.627 164.2 836.816 164.527 836.119C164.859 835.421 165.326 834.876 165.93 834.483C166.533 834.09 167.238 833.894 168.046 833.894C168.86 833.894 169.557 834.082 170.138 834.458C170.725 834.835 171.173 835.361 171.483 836.036C171.798 836.705 171.956 837.486 171.956 838.376V838.941H164.784V837.787H171.217L170.503 838.841V838.269C170.503 837.566 170.398 836.987 170.188 836.534C169.978 836.08 169.687 835.742 169.316 835.521C168.946 835.294 168.52 835.181 168.038 835.181C167.557 835.181 167.125 835.3 166.743 835.538C166.367 835.77 166.068 836.116 165.847 836.575C165.625 837.035 165.515 837.599 165.515 838.269V838.841C165.515 839.478 165.623 840.023 165.838 840.477C166.054 840.925 166.361 841.271 166.76 841.514C167.158 841.752 167.629 841.871 168.171 841.871C168.575 841.871 168.926 841.816 169.225 841.705C169.524 841.594 169.77 841.453 169.964 841.282C170.158 841.11 170.293 840.936 170.371 840.759L170.404 840.684H171.848L171.832 840.75C171.754 841.055 171.616 841.351 171.417 841.639C171.223 841.921 170.971 842.178 170.661 842.411C170.351 842.638 169.983 842.82 169.557 842.958C169.137 843.091 168.663 843.158 168.138 843.158Z"
            fill="#3C3C43"
            fill-opacity="0.3"
          />
          <path
            d="M384.406 835.703V834.117C384.406 833.956 384.464 833.818 384.578 833.703C384.693 833.589 384.831 833.531 384.992 833.531C385.159 833.531 385.299 833.589 385.414 833.703C385.529 833.818 385.586 833.956 385.586 834.117V835.656C385.586 836.542 385.768 837.318 386.133 837.984C386.497 838.651 387.01 839.169 387.672 839.539C388.333 839.904 389.109 840.086 390 840.086C390.891 840.086 391.664 839.904 392.32 839.539C392.982 839.169 393.495 838.651 393.859 837.984C394.224 837.318 394.406 836.542 394.406 835.656V834.117C394.406 833.956 394.464 833.818 394.578 833.703C394.693 833.589 394.833 833.531 395 833.531C395.161 833.531 395.299 833.589 395.414 833.703C395.529 833.818 395.586 833.956 395.586 834.117V835.703C395.586 836.724 395.375 837.63 394.953 838.422C394.536 839.214 393.953 839.849 393.203 840.328C392.453 840.802 391.581 841.081 390.586 841.164V842.984H393.484C393.651 842.984 393.792 843.042 393.906 843.156C394.021 843.271 394.078 843.411 394.078 843.578C394.078 843.74 394.021 843.878 393.906 843.992C393.792 844.107 393.651 844.164 393.484 844.164H386.508C386.341 844.164 386.201 844.107 386.086 843.992C385.971 843.878 385.914 843.74 385.914 843.578C385.914 843.411 385.971 843.271 386.086 843.156C386.201 843.042 386.341 842.984 386.508 842.984H389.406V841.164C388.411 841.081 387.539 840.802 386.789 840.328C386.039 839.849 385.453 839.214 385.031 838.422C384.615 837.63 384.406 836.724 384.406 835.703ZM390 838.406C389.479 838.406 389.023 838.286 388.633 838.047C388.242 837.807 387.938 837.477 387.719 837.055C387.5 836.628 387.391 836.135 387.391 835.578V830.352C387.391 829.794 387.5 829.305 387.719 828.883C387.938 828.456 388.242 828.122 388.633 827.883C389.023 827.643 389.479 827.523 390 827.523C390.516 827.523 390.969 827.643 391.359 827.883C391.755 828.122 392.06 828.456 392.273 828.883C392.492 829.305 392.602 829.794 392.602 830.352V835.578C392.602 836.135 392.492 836.628 392.273 837.055C392.06 837.477 391.755 837.807 391.359 838.047C390.969 838.286 390.516 838.406 390 838.406Z"
            fill="#3C3C43"
            fill-opacity="0.3"
          />
        </g>
      </g>
      {/* Navigation Bar  */}
      <g>
        {/* Background */}
        <mask fill="white">
          <path d="M24 23H426V162H24V23Z" />
        </mask>
        <path
          d="M24 23H426V162H24V23Z"
          fill="white"
          fill-opacity="0.75"
          style={{ mixBlendMode: "hard-light" }}
        />
        {/* Border */}
        <mask id={`border-${id}`} fill="white">
          <path d="M24 23H426V162H24V23Z" />
        </mask>
        <path
          d="M426 161.67H24V162.33H426V161.67Z"
          fill="black"
          fill-opacity="0.3"
          mask={`url(#border-${id})`}
        />
        <g>
          {/* Avatar */}
          <rect
            id="Avatar"
            x="199.5"
            y="86"
            width="50"
            height="50"
            rx="25"
            fill={`url(#pattern-${id})`}
          />
          <g>
            {/* Name */}
            <text
              fill="black"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              //   fontFamily="Inter"
              fontSize="11"
              letterSpacing="0px"
            >
              <tspan x="225" y="151.41" text-anchor="middle">
                {name}
              </tspan>
            </text>
            {/* Chevron */}
            <text
              fill="#3C3C43"
              fillOpacity="0.6"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="9"
              letterSpacing="0px"
            >
              <tspan x="244.643" y="150.699">
                &#x10018a;
              </tspan>
            </text>
          </g>
        </g>
        <g>
          {/* Back */}
          <path
            d="M41.332 108.244C41.332 108.058 41.3643 107.886 41.4287 107.729C41.5003 107.571 41.6077 107.421 41.751 107.277L50.1191 99.0918C50.3626 98.8555 50.6562 98.7373 51 98.7373C51.2363 98.7373 51.4476 98.7946 51.6338 98.9092C51.8271 99.0166 51.9811 99.1634 52.0957 99.3496C52.2103 99.5358 52.2676 99.7471 52.2676 99.9834C52.2676 100.32 52.1351 100.621 51.8701 100.886L44.3291 108.244L51.8701 115.603C52.1351 115.868 52.2676 116.172 52.2676 116.516C52.2676 116.745 52.2103 116.952 52.0957 117.139C51.9811 117.332 51.8271 117.482 51.6338 117.59C51.4476 117.704 51.2363 117.762 51 117.762C50.6562 117.762 50.3626 117.64 50.1191 117.396L41.751 109.211C41.6077 109.068 41.5003 108.917 41.4287 108.76C41.3643 108.602 41.332 108.43 41.332 108.244Z"
            fill="#007AFF"
          />
          {/* FaceTime */}
          <path
            d="M379.782 117.074C378.472 117.074 377.444 116.713 376.699 115.989C375.962 115.259 375.593 114.238 375.593 112.928V103.55C375.593 102.246 375.976 101.233 376.742 100.51C377.516 99.7793 378.529 99.4141 379.782 99.4141H391.008C392.318 99.4141 393.342 99.7793 394.08 100.51C394.825 101.233 395.197 102.246 395.197 103.55V112.928C395.197 114.238 394.825 115.259 394.08 115.989C393.342 116.713 392.318 117.074 391.008 117.074H379.782ZM380.083 115.452H390.707C391.588 115.452 392.268 115.223 392.748 114.765C393.228 114.306 393.468 113.612 393.468 112.681V103.808C393.468 102.877 393.228 102.182 392.748 101.724C392.268 101.258 391.588 101.025 390.707 101.025H380.083C379.202 101.025 378.522 101.258 378.042 101.724C377.562 102.182 377.322 102.877 377.322 103.808V112.681C377.322 113.612 377.562 114.306 378.042 114.765C378.522 115.223 379.202 115.452 380.083 115.452ZM394.95 105.236L399.258 101.595C399.473 101.416 399.695 101.272 399.924 101.165C400.153 101.05 400.379 100.993 400.601 100.993C401.073 100.993 401.453 101.151 401.739 101.466C402.026 101.781 402.169 102.189 402.169 102.69V113.798C402.169 114.299 402.026 114.707 401.739 115.022C401.453 115.338 401.073 115.495 400.601 115.495C400.379 115.495 400.153 115.441 399.924 115.334C399.695 115.219 399.473 115.073 399.258 114.894L394.95 111.241V109.211L400.063 113.433C400.114 113.461 400.157 113.49 400.192 113.519C400.235 113.54 400.278 113.551 400.321 113.551C400.443 113.551 400.504 113.468 400.504 113.304V103.185C400.504 103.013 400.443 102.927 400.321 102.927C400.278 102.927 400.235 102.941 400.192 102.97C400.157 102.991 400.114 103.02 400.063 103.056L394.95 107.277V105.236Z"
            fill="#007AFF"
          />
        </g>
      </g>
      <defs>
        <filter
          id={`filter-${id}`}
          x="-26"
          y="-27"
          width="502"
          height="239"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2003_5450"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2003_5450"
            result="shape"
          />
        </filter>
        <pattern
          id={`pattern-${id}`}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref={`#image-${id}`} transform="scale(0.00740741)" />
        </pattern>
        <image
          id={`image-${id}`}
          width="135"
          height="135"
          xlinkHref={avatar || ""}
          preserveAspectRatio="xMidYMid slice"
        />
      </defs>
    </>
  );
}

const messageRowVariants = cva(
  "flex gap-[10px] items-center group justify-start",
  {
    variants: {
      type: {
        received: "flex-row",
        sent: "flex-row-reverse",
      },
      isOver: {
        true: "",
        false: "",
      },
    },
  }
);

const messageBubbleVariants = cva(
  "max-w-[295px] px-[14px] py-[7px] rounded-[16px] text-[17px] text-left relative group cursor-default whitespace-pre-wrap",
  {
    variants: {
      type: {
        received: "bg-[var(--messaging-bubble)] text-[var(--primary-label)]",
        sent: "bg-[var(--system-blue)] text-[#ffffff]",
      },
      os: {
        iphone: "",
        android: "",
      },
      isOver: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        os: "iphone",
        type: "sent",
        className: "bg-[var(--system-blue)] text-[#ffffff]",
      },
      {
        os: "android",
        type: "sent",
        className: "bg-[var(--system-green)] text-[#ffffff]",
      },
    ],
  }
);

const messageActionsVariants = cva(
  "w-6 h-6 rounded-full bg-[var(--messaging-bubble)] flex-row items-center justify-center cursor-pointer opacity-60 hover:opacity-100 hidden group-hover:flex",
  {
    variants: {
      destructive: {
        true: "text-[var(--system-red)]",
        false: "text-[var(--primary-label)]",
      },
    },
    defaultVariants: { destructive: false },
  }
);

function getSeparator(
  message: Message,
  previousMessage: Message | null,
  systemTime: DateTime,
  systemOS: "iphone" | "android"
): ReactNode | null {
  const messageTime = DateTime.fromISO(message.time.toString());

  if (!previousMessage) {
    return (
      <div className="pb-4">
        <div className="text-xs text-[var(--secondary-label)]">
          {systemOS === "iphone" ? `iMessage` : `Text Message`}
        </div>
        <div className="text-xs text-[var(--secondary-label)]">
          {!messageTime.hasSame(systemTime, "day") ? (
            messageTime > systemTime.minus({ days: 7 }) ? (
              <>
                <span className="font-bold">
                  {messageTime.toFormat("cccc")}
                </span>
                <span className="ml-1">
                  {messageTime.toLocaleString(DateTime.TIME_SIMPLE)}
                </span>
              </>
            ) : (
              messageTime.toFormat("ccc, LLL d 'at' h:mm a")
            )
          ) : null}
        </div>
      </div>
    );
  }

  const previousMessageTime = DateTime.fromISO(previousMessage.time.toString());

  // Date change
  if (!previousMessageTime?.hasSame(messageTime, "day")) {
    return (
      <div className="py-4 text-xs text-[var(--secondary-label)]">
        {messageTime.hasSame(systemTime, "day") ? (
          <>
            <span className="font-bold">Today</span>
            <span className="ml-1">
              {messageTime.toLocaleString(DateTime.TIME_SIMPLE)}
            </span>
          </>
        ) : messageTime < systemTime.plus({ days: 7 }) ? (
          <>
            <span className="font-bold">{messageTime.toFormat("cccc")}</span>
            <span className="ml-1">
              {messageTime.toLocaleString(DateTime.TIME_SIMPLE)}
            </span>
          </>
        ) : (
          messageTime.toFormat("ccc, LLL d 'at' h:mm a")
        )}
      </div>
    );
  }

  // Blank space
  if (
    previousMessage?.type !== message.type ||
    (previousMessageTime &&
      messageTime > previousMessageTime.plus({ minutes: 5 }))
  ) {
    return <div className="h-[20px]" />;
  }

  return <div className="h-[4px]" />;
}

export const IMessageScreenMessageList = function (props: {
  messages: Message[];
}) {
  const { messages } = props;

  const app = useApp();
  const systemOS = app((x) => x.contactOS);
  const systemTime = app((x) => x.systemTime);

  const sortedMessagesWithTails = useMemo(
    () =>
      messages
        .toSorted((a, b) =>
          DateTime.fromISO(a.time.toString()) >=
          DateTime.fromISO(b.time.toString())
            ? 1
            : -1
        )
        .reduce((acc, message, i) => {
          const previousMessage = acc[i - 1];

          if (previousMessage) {
            previousMessage.hasTail = (() => {
              //not same type (sent vs received)
              if (previousMessage.type !== message.type) return true;

              const previousMessageTime = DateTime.fromISO(
                previousMessage.time.toString()
              );
              const messageTime = DateTime.fromISO(message.time.toString());

              //not same day
              if (!previousMessageTime.hasSame(messageTime, "day")) return true;

              //not 5 minutes apart
              if (messageTime > previousMessageTime.plus({ minutes: 5 }))
                return true;

              return false;
            })();
          }

          acc.push({ ...message, hasTail: true });
          return acc;
        }, [] as (Message & { hasTail?: boolean })[]),
    [messages]
  );

  const messagesWithSeparators = useMemo(
    () =>
      sortedMessagesWithTails.flatMap((message, i) => {
        const previousMessage = sortedMessagesWithTails[i - 1];
        const separator = getSeparator(
          message,
          previousMessage,
          DateTime.fromISO(systemTime.toString()),
          systemOS
        );
        return [
          ...(separator ? [separator] : []),
          <IMessageScreenMessage
            key={message.id}
            {...message}
            variants={{
              initial: {},
              animate: {},
              exit: {},
            }}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
          >
            {message.text}
          </IMessageScreenMessage>,
        ];
      }),
    [sortedMessagesWithTails, systemTime, systemOS]
  );

  return <div className="flex flex-col w-full">{messagesWithSeparators}</div>;
};

export const IMessageScreenMessage = motion(
  forwardRef<
    ElementRef<"div">,
    Omit<ComponentProps<"div">, "id"> & MessageType & { hasTail?: boolean }
  >(function (props, ref) {
    const { className, type, children, id, hasTail, ...rest } = props;

    const app = useApp();
    const systemOS = app((x) => x.contactOS);

    return (
      <div
        ref={ref}
        {...rest}
        className={cn(messageRowVariants({ type }), className)}
      >
        <motion.div
          className={cn(
            messageBubbleVariants({ type, os: systemOS }),
            className
          )}
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
          }}
        >
          {children}
          {/* Tail */}
          {hasTail && (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "absolute",
                type === "sent"
                  ? "-right-[5px] -bottom-[5px] scale-x-[-1]"
                  : "-left-[5px] -bottom-[5px]"
              )}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.797852 19.5H0.999564C11.493 19.5 19.9996 10.9934 19.9996 0.5H4.99989V3.5C4.99989 9.0858 4.99989 11.8787 4.21426 14.1239C3.49455 16.1807 2.31583 18.0127 0.797852 19.5Z"
                fill={
                  type === "sent"
                    ? systemOS === "iphone"
                      ? "var(--system-blue)"
                      : "var(--system-green)"
                    : "var(--messaging-bubble)"
                }
              />
            </svg>
          )}
        </motion.div>
        <>
          <div
            className={messageActionsVariants()}
            onClick={() => {
              app.setState((x) => {
                //edit
              });
            }}
          >
            <i className="icon-[heroicons--pencil] text-xs" />
          </div>
          <div
            className={messageActionsVariants({ destructive: true })}
            onClick={() => {
              app.setState((x) => {
                const found = x.messages.findIndex((x) => x.id === id);
                x.messages.splice(found, 1);
              });
            }}
          >
            <i className="icon-[heroicons--trash] text-xs" />
          </div>
        </>
      </div>
    );
  })
);
