import { routesType } from "types/Sidebar";

// eslint-disable-next-line import/prefer-default-export
export const AdminRoutes: routesType = [
  {
    path: "/product/S2S_PLID_Wrap",
    key: "/product/S2S_PLID_Wrap",
    name: "S2S Anti Corrosion Inhibitor System",
    icon: "",
    children: [
      {
        path: "/product/S2S_PLID_Wrap",
        key: "product/S2S_PLID_Wrap",
        name: "S2S PLID Wrap",
      },
      {
        path: "/product/S2S_HD_Corrosion_Shield",
        key: "product/S2S_HD_Corrosion_Shield",
        name: "S2S HD Corrosion Shield",
      },
      {
        path: "/product/S2S_Void_&_Rudder_Float_Coat",
        key: "product/S2S_Void_&_Rudder_Float_Coat",
        name: "S2S Void & Rudder Float Coat",
      },
      {
        path: "/product/wax_tape",
        key: "product/wax_tape",
        name: "S2S Wire Rope Corrosion Control",
      },
      {
        path: "/product/wax_tape",
        key: "product/wax_tape",
        name: "S2S Anchor Chain Corrosion Control",
      },
      {
        path: "/product/wax_tape",
        key: "product/wax_tape",
        name: "S2S Automotive Rust Proofing",
      },
    ],
  },
  {
    path: "/product/corrosions",
    key: "/product/corrosions",
    name: "HD Corrosions Shield",
    icon: "",
    children: [],
  },
  {
    path: "/product/automotive",
    key: "/product/automotive",
    name: "Automotive Rust Proofing",
    icon: "",
    children: [],
  },
  {
    path: "/product/void_and_Rudder",
    key: "/product/void_and_Rudder",
    name: "Void & Rudder Float Coat",
    icon: "",
    children: [],
  }
];
