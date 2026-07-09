import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// Core and Feature Views
import Products from "./pages/Products/Products";
import Payout from "./pages/Accounts/Payout";

// Business Context Views
import AddLead from "./pages/Business/AddLead";
import GrabLead from "./pages/Business/GrabLead";
import LeadFunnel from "./pages/Business/LeadFunnel";
import LeadTracker from "./pages/Business/LeadTracker";
import LoginMis from "./pages/Business/LoginMis";
import MyLead from "./pages/Business/MyLead";

// Telephony Context Views
import CallLog from "./pages/Call/CallLog";
import ImportData from "./pages/Call/ImportData";

// Employee Corner Layout Core
import MyTeam from "./pages/EmployeeCorner/MyTeam";
import DesignationSetting from "./pages/EmployeeCorner/DesignationSetting";
import Partner from "./pages/EmployeeCorner/Partner";

// Partner / Vendor Sub-directories
import AddVendorExecutive from "./pages/Partner/AddVendorExecutive";
import VendorList from "./pages/Partner/VendorList";
import VendorRM from "./pages/Partner/VendorRM";

// Configuration and System Settings
import CompanySetting from "./pages/Setting/CompanySetting";
import Offers from "./pages/Setting/Offers";
import AddEmployees from "./pages/EmployeeCorner/Employees/AddEmployees";
import AddAgents from "./pages/EmployeeCorner/Agents/AddAgents";
import AddTeam from "./pages/EmployeeCorner/Teams/AddTeam";

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Automatic structural redirect to dashboard default module */}
        <Route
          path="/"
          element={<Navigate to="/employee-corner/my-team" replace />}
        />

        {/* Simple Static Modules */}
        <Route path="/products" element={<Products />} />
        <Route path="/accounts/payout" element={<Payout />} />

        {/* Business Operations Subtree */}
  
        <Route path="/business/add-lead" element={<AddLead />} />
        <Route path="/business/grab-lead" element={<GrabLead />} />
        <Route path="/business/lead-funnel" element={<LeadFunnel />} />
        <Route path="/business/lead-tracker" element={<LeadTracker />} />
        <Route path="/business/login-mis" element={<LoginMis />} />
        <Route path="/business/my-lead" element={<MyLead />} />
        

        {/* Call / Dialer Subtree */}
        <Route path="/call/call-log" element={<CallLog />} />
        <Route path="/call/import-data" element={<ImportData />} />

        {/* Employee Control Room Modules */}
        <Route path="/employee-corner/my-team" element={<MyTeam />} />
        <Route
          path="/employee-corner/designation-setting"
          element={<DesignationSetting />}
        />
        <Route path="/employee-corner/partner" element={<Partner />} />


        {/* Add Employees */}
         <Route path="/add-employees" element={<AddEmployees/>} />

         {/* Add Agents */}
         <Route path="/add-agents" element={<AddAgents/>} />

         {/* Add Teams */}
            <Route path="/add-teams" element={<AddTeam/>} />

        {/* Partners & Vendor Subtree Management */}
        <Route path="/partner/add-vendor" element={<AddVendorExecutive />} />
        <Route path="/partner/vendor-list" element={<VendorList />} />
        <Route path="/partner/vendor-rm" element={<VendorRM />} />

        {/* System Settings Subtree */}
        <Route path="/setting/company" element={<CompanySetting />} />
        <Route path="/setting/offers" element={<Offers />} />

        {/* Fallback Catchroute */}
        <Route
          path="*"
          element={
            <div className="p-8 text-sm text-gray-400 font-medium">
              404 — Module router destination unmapped.
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}
