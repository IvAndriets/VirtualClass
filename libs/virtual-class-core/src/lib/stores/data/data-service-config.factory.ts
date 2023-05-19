import { DefaultDataServiceConfig } from '@ngrx/data';
import { ConfigService } from "@virtual-class-frontend/virtual-class-config";

export const dataServiceConfigFactory = (config: ConfigService): DefaultDataServiceConfig => {

  console.error('config', config, `${config.getEnvironment().api_url}`);
  return {
    root: `${config.getEnvironment().api_url}api/`,
    entityRoot: {
      NotificationLog: config.getEnvironment().api_notification_url,
      BatchOrderNotifications: config.getEnvironment().api_notification_url,
      ContinuousOrderNotifications: config.getEnvironment().api_notification_url,
      SampleNotifications: config.getEnvironment().api_notification_url,
      MultiChemProducts: config.getEnvironment().common_api_url,
      MultiChemProductTypes: config.getEnvironment().common_api_url,
      BreadcrumbsDocuments: config.getEnvironment().api_file_url,
      Tags: config.getEnvironment().api_file_url,
    },
    entityHttpResourceUrls: {
      AssetFeatures: {
        entityResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Asset Failures/`,
        collectionResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Asset Failures/`,
      },
      FieldBacteriaAnalysis: {
        entityResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Bacteria/`,
        collectionResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Bacteria/`,
      },
      FieldMilliporeAnalysis: {
        entityResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Millipore Analysis/`,
        collectionResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Millipore Analysis/`,
      },
      FieldGasAnalysis: {
        entityResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Gas Analysis/`,
        collectionResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Gas Analysis/`,
      },
      FieldOilAnalysis: {
        entityResourceUrl: `${config.getEnvironment().api_url}/Logs/GetFieldOilAnalysisLogs/Field Oil Analysis/`,
        collectionResourceUrl: `${config.getEnvironment().api_url}/Logs/GetFieldOilAnalysisLogs/Field Oil Analysis/`,
      },
      FieldResidualAnalysis: {
        entityResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetFieldResidualAnalysisLogs/Field Residual Analysis/`,
        collectionResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetFieldResidualAnalysisLogs/Field Residual Analysis/`,
      },
      GateCheckLog: {
        entityResourceUrl: `${config.getEnvironment().api_url}/Logs/GetGateCheckLogs/Gate Check Log/`,
        collectionResourceUrl: `${config.getEnvironment().api_url}/Logs/GetGateCheckLogs/Gate Check Log/`,
      },
      FieldWaterAnalysis: {
        entityResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Water Analysis/`,
        collectionResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Water Analysis/`,
      },
      PhaseSeparationEditable: {
        entityResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Phase Separation/`,
        collectionResourceUrl: `${config.getEnvironment().api_url}/Logs/GetSampleCaptureLogs/Phase Separation/`,
      },
      LabBacteria: {
        entityResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetLabFloBacteriaAnalysisLogs/LabFlo Bacteria Analysis/`,
        collectionResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetLabFloBacteriaAnalysisLogs/LabFlo Bacteria Analysis/`,
      },
      LabCoupon: {
        entityResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetLabfloCouponAnalysisLogs/Labflo Coupon Analysis/`,
        collectionResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetLabfloCouponAnalysisLogs/Labflo Coupon Analysis/`,
      },
      LabMillipore: {
        entityResourceUrl: `${config.getEnvironment().api_url}/Logs/GetLabfloMiliporeLogs/Labflo Milipore/`,
        collectionResourceUrl: `${config.getEnvironment().api_url}/Logs/GetLabfloMiliporeLogs/Labflo Milipore/`,
      },
      LabOil: {
        entityResourceUrl: `${config.getEnvironment().api_url}/Logs/GetLabfloOilAnalysisLogs/Labflo Oil Analysis/`,
        collectionResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetLabfloOilAnalysisLogs/Labflo Oil Analysis/`,
      },
      LabResidual: {
        entityResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetLabFloResidualAnalysisLogs/LabFlo Residual Analysis/`,
        collectionResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetLabFloResidualAnalysisLogs/LabFlo Residual Analysis/`,
      },
      LabSolids: {
        entityResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetLabfloSolidsAnalysisLogs/Labflo Solids Analysis/`,
        collectionResourceUrl:
          `${config.getEnvironment().api_url}/Logs/GetLabfloSolidsAnalysisLogs/Labflo Solids Analysis/`,
      },
    },
  } as any;

};
