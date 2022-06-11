import { useEffect, useState } from "react";
import { Report } from "../../../@types/Report";
import { ApiService } from "../../../services/ApiService";

export default function ReportPets() {
  const [reportList, setReportList] = useState<Report[]>([]);

  useEffect(() => {
    ApiService.get("/adocoes").then((resp) => {
      setReportList(resp.data);
    });
  }, []);

  return {
    reportList,
  };
}
