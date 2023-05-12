import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from "@virtual-class-frontend/virtual-class-config";
import { ClientBaseService, ClientOptions } from "@virtual-class-frontend/virtual-class-core";

@Injectable()
export class ApxSolsticeWebClientService extends ClientBaseService {

  constructor(
    http: HttpClient,
    config: ConfigService,
  ) {
    super(http, config);
  }

  // getTasks(options: ClientOptions = {}): Observable<TasksResponse> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Location/GetAllTankLocationsForUser`, _options);
  // }
  //
  // getTaskByLocationId(locationId: string, options: ClientOptions = {}): Observable<Task> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Location/TankLocationsForUser/${locationId}`, _options);
  // }
  //
  // getTaskByTaskId(locationId: string, options: ClientOptions = {}): Observable<TasksResponse> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Location/GetAllTankLocationsForUser/${locationId}`, _options);
  // }

  getUserRoles(options: ClientOptions = {}): Observable<string[]> {
    const _options = {
      ...options,
      params: {
        ...options.params,
      },
    };

    return this.get(`/GetAppRoles`, _options);
  }

  // getAccounts(options: ClientOptions = {}): Observable<Account[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/AccountsLite`, _options)
  //     .pipe(
  //       map(accounts => accounts
  //         .sort((a, b) => a.CustomerName.toLowerCase().localeCompare(b.CustomerName.toLowerCase()))),
  //     );
  // }
  //
  // getAccountById(accountId: string, options: ClientOptions = {}): Observable<AccountExtended> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/GetAccount/${accountId}`, _options);
  // }
  //
  // createAccount(account: Partial<Account>, options: ClientOptions = {}): Observable<Account> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Account/CreateAccount`, account, _options);
  // }
  //
  // updateAccount(account: Partial<Account>, options: ClientOptions = {}): Observable<Account> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Account/UpdatePendingAccount`, account, _options);
  // }
  //
  // getCustomers(options: ClientOptions = {}): Observable<Customer[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Customers`, _options);
  // }
  //
  // getPlants(options: ClientOptions = {}): Observable<Plant[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Plants`, _options);
  // }
  //
  // getPlantsManagers(options: ClientOptions = {}): Observable<Manager[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Reference/GetPlantManagers`, _options);
  // }
  //
  // getAccountFilters(options: ClientOptions = {}): Observable<AccountFilter> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Filters/GetLandingPageFilters`, _options);
  // }
  //
  // getPageConfig(accountId: string, options: ClientOptions = {}): Observable<AccountPageConfig> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Specifications/GetPageConfig/${accountId}`, _options);
  // }
  //
  // getAssets(accountId: string, options: ClientOptions = {}): Observable<Asset[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Location/GetLocationsByAccount/${accountId}`, _options);
  // }
  //
  // getAssetsForUser(options: ClientOptions = {}): Observable<Asset[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Location/GetAllLocationsforUser`, _options);
  // }
  //
  // getAssetsById(assetId: string, options: ClientOptions = {}): Observable<Asset> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Location/GetLocationById/${assetId}`, _options);
  // }
  //
  // createWell(accountId: string, well: Partial<Asset>, options: ClientOptions = { }): Observable<Asset> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/CreateLocation`, well, _options).pipe(
  //     map(id => ({ ...well, Id: id } as any)),
  //   );
  // }
  //
  // createWellBulk(accountId: string, wells: Partial<Asset[]>, options: ClientOptions = { }): Observable<Asset[]> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/batch`, wells, _options).pipe(
  //     map(result => {
  //       return wells.map(w => {
  //         const rowResult = result.find(r => r.uuid === (w as any).uuid);
  //
  //         return !rowResult || rowResult.ErrorMessage
  //           ? ({ ...w, error: rowResult?.ErrorMessage ?? 'Something went wrong' } as any)
  //           : ({ ...w, ...rowResult, Id: rowResult.Id, error: '' } as any);
  //       });
  //     }),
  //   );
  // }
  //
  // updateWell(accountId: string, well: Partial<Asset>, options: ClientOptions = { }): Observable<Asset> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/UpdateLocation`, well, _options);
  // }
  //
  // getWells(accountId: string, options: ClientOptions = { }): Observable<Asset[]> {
  //   const _options = { ...options, params: { ...options.params } };
  //
  //   return this.get(`/Location/GetLocationsByAccount/${accountId}`, _options);
  // }
  //
  // getFields(accountId: string, plantId: string, soldTo: number, options: ClientOptions = {}):
  //   Observable<FieldInterface[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Location/GetAllFields/${accountId}/${soldTo}/${plantId}`, _options);
  // }
  //
  // getSites(accountId: string, soldTo: number, plantId: string, options: ClientOptions = {}): Observable<SiteCollection> {
  //   const _options = { ...options, params: { ...options.params } };
  //
  //   return this.get(`/Location/GetAllSites/${accountId}/${soldTo}/${plantId}`, _options);
  // }
  //
  // getCustomTags(accountId: string, options: ClientOptions = {}): Observable<CustomTag[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //       accountId: accountId,
  //     },
  //   };
  //
  //   return this.get(`/custom-tags`, _options);
  // }
  //
  // getRoutes(plantId: string, options: ClientOptions = {}): Observable<AssetsRoute[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Plants/Routes/${plantId}`, _options);
  // }
  //
  // getRouteSequencing(plantId: string, options: ClientOptions = {}): Observable<Sequencing> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Route/GetSequencing/${plantId}`, _options);
  // }
  //
  // updateRouteSequencing(data: any, options: ClientOptions = {}): Observable<UpdateSequencingResponseItem[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Route/EditSequencing`, data, _options);
  // }
  //
  // getAssetTypes(options: ClientOptions = {}): Observable<AssetType[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Location/GetWellTypes`, _options);
  // }
  //
  // getAssetNonWellTypes(options: ClientOptions = {}): Observable<AssetType[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Location/GetNonWellTypes`, _options);
  // }
  //
  // addDashboardNote(accountId: string, data: any): Observable<any> {
  //   const options: ClientOptions = {
  //     params: {
  //       accountId,
  //     },
  //   };
  //
  //   return this.post(`/Account/AddNotes`, data, options);
  // }
  //
  // getDashboardDonutCharts(accountId: string): Observable<any> {
  //   return this.get(`/GetDashboardDonutChartData/${accountId}`);
  // }
  //
  // getDashboardPerformanceCharts(data: any): Observable<any[]> {
  //   return this.post(`/GetPerformanceData`, data);
  // }
  //
  // loadSupportLinks(): Observable<any[]> {
  //   return this.get('/Reference/GetSupportLinks');
  // }
  //
  // downloadTemplate(fileTemplateType: string): Observable<Blob> {
  //   return this.get(`/Reference/DownloadTemplate/${fileTemplateType}`, {
  //     responseType: 'blob',
  //   });
  // }
  //
  // getTanks(accountId: string, options: ClientOptions = {}): Observable<TankCollection> {
  //   const _options = { ...options, params: { ...options.params } };
  //
  //   return this.get(`/Tank/GetAccountTanks/${accountId}`, _options);
  // }
  //
  // createContinuousTreatment(
  //   accountId: string,
  //   treatment: Partial<ContinuousTreatment>,
  //   options: ClientOptions = { },
  // ): Observable<any> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/CreateContinuousTreatment`, treatment, _options);
  // }
  //
  // createBulkContinuousTreatment(
  //   accountId: string,
  //   treatments: Partial<ContinuousTreatment[]>,
  //   options: ClientOptions = { },
  // ): Observable<any[]> {
  //   const _options = {
  //     ...options,
  //     params: { ...options.params },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.post(`/Location/ContinuousTreatment/batch`, treatments, _options).pipe(
  //     map(result => {
  //       return treatments.map(w => {
  //         const rowResult = result.find(r => r.uuid === (w as any).uuid);
  //
  //         return !rowResult || rowResult.ErrorMessage
  //           ? ({ ...w, error: rowResult?.ErrorMessage ?? 'Something went wrong' } as any)
  //           : ({ ...w, ...rowResult, Id: rowResult.Id, error: '' } as any);
  //       });
  //     }),
  //   );
  // }
  //
  // updateContinuousTreatment(
  //   accountId: string,
  //   treatment: Partial<ContinuousTreatment>,
  //   options: ClientOptions = { },
  // ): Observable<any> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/UpdateContinuousTreatment`, treatment, _options);
  // }
  //
  // deleteContinuousTreatment(
  //   accountId: string,
  //   treatment: Partial<ContinuousTreatment>,
  //   options: ClientOptions = { },
  // ): Observable<any> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/RemoveContinuousTreatment`, treatment, _options);
  // }
  //
  // setSuspendTreatment(
  //   data: {
  //     treatmentType: string;
  //     locationId: string;
  //     treatmentId: number;
  //     reasonId: string;
  //     startDate: string;
  //     endDate: string;
  //   },
  //   accountId: string,
  //   options: ClientOptions = {},
  // ): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.post(`/location/pause-treatment`, data, _options);
  // }
  //
  // setSuspendAsset(
  //   data: {
  //     locationId: string;
  //     reasonId: string;
  //     startDate: string;
  //     endDate: string;
  //   },
  //   accountId: string,
  //   options: ClientOptions = {},
  // ): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.post(`/location/pause`, data, _options);
  // }
  //
  // setSuspendSample(data: any, accountId: string, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.post(`/location/pause-sample`, data, _options);
  // }
  //
  // setSuspendTank(
  //   data: {
  //     tankId: string;
  //     reasonId: string;
  //     pauseStartDate: string;
  //     pauseEndDate: string;
  //   },
  //   accountId: string,
  //   options: ClientOptions = {},
  // ): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.post(`/Tank/pause`, data, _options);
  // }
  //
  // updateLocationAnalysis(
  //   locationId: string,
  //   samples: Partial<Sample>[], options: ClientOptions = {}): Observable<Sample[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //       locationId: locationId,
  //     },
  //   };
  //
  //   return this.post(`/Location/UpdateLocationAnalysis`, samples, _options);
  // }
  //
  // getBatchTreatments(accountId: string, options: ClientOptions = { }): Observable<BatchTreatment[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Location/GetLocationsByAccount/${accountId}`, _options).pipe(
  //     map(assets => Object.values(assets) as Asset[]),
  //     map((assets: Asset[]) => assets
  //       .reduce((acc, l) => [...acc,
  //         ...(l.BatchTreatments?.map(t => ({ ...t, LocationName: l.LocationName })) ?? [])], [])),
  //   );
  // }
  //
  // createBatchTreatment(
  //   accountId: string,
  //   treatment: Partial<BatchTreatment>,
  //   options: ClientOptions = { },
  // ): Observable<Asset> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.post(`/Location/CreateBatchTreatment`, treatment, _options);
  // }
  //
  // createBulkBatchTreatment(
  //   accountId: string,
  //   treatments: Partial<BatchTreatment[]>,
  //   options: ClientOptions = { },
  // ): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: { ...options.params },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.post(`/Location/BatchTreatment/batch`, treatments, _options).pipe(
  //     map(result => {
  //       return treatments.map(w => {
  //         const rowResult = result.find(r => r.uuid === (w as any).uuid);
  //
  //         return !rowResult || rowResult.ErrorMessage
  //           ? ({ ...w, error: rowResult?.ErrorMessage ?? 'Something went wrong' } as any)
  //           : ({ ...w, ...rowResult, Id: rowResult.Id, error: '' } as any);
  //       });
  //     }),
  //   );
  // }
  //
  // updateBatchTreatment(
  //   accountId: string,
  //   treatment: Partial<BatchTreatment>,
  //   options: ClientOptions = { },
  // ): Observable<Asset> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.post(`/Location/UpdateBatchTreatment`, treatment, _options);
  // }
  //
  // createStimulationJob(
  //   accountId: string,
  //   treatment: any,
  //   options: ClientOptions = { },
  // ): Observable<any> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/CreateStimulationJob/`, treatment, _options);
  // }
  //
  // updateStimulationJob(
  //   accountId: string,
  //   treatment: any,
  //   options: ClientOptions = { },
  // ): Observable<any> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/StimulationJob/Update/`, treatment, _options);
  // }
  //
  // deleteStimulationJob(
  //   accountId: string,
  //   treatment: any,
  //   options: ClientOptions = { },
  // ): Observable<any> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/DeleteStimJob/`, treatment, _options);
  // }
  //
  // updateStimulationTreatment(
  //   accountId: string,
  //   treatment: any,
  //   options: ClientOptions = { },
  // ): Observable<any> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/UpdateStimTreatment/`, treatment, _options);
  // }
  //
  // completeStimulationLob(
  //   accountId: string,
  //   treatment: any,
  //   options: ClientOptions = { },
  // ): Observable<any> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/CompleteStimJob/`, treatment, _options);
  // }
  //
  // createField(accountId: string, field: any, options: ClientOptions = { }): Observable<any> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/AddEditFields`, field, _options);
  // }
  //
  // updateField(accountId: string, field: any, options: ClientOptions = { }): Observable<any> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Location/AddEditFields`, field, _options);
  // }
  //
  // getReferenceKpiSection(accountId: string, unitSystemId: any,
  //                        options: ClientOptions = { }): Observable<ReferenceKpiSection> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //       timestamp: Date.now(),
  //       ...unitSystemId && { unitSystemID: unitSystemId },
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.get(`/Reference/GetReferenceKpiSection`, _options);
  // }
  //
  // updateKpiSections (accountId: string, kpiSections: KpiSection[], options: ClientOptions = { }): Observable<boolean> {
  //   const _options = { ...options, params: { ...options.params, accountId }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Account/UpdateKPISections`, kpiSections, _options);
  // }
  //
  // loadAccountFiles (accountId: string, options: ClientOptions = { }): Observable<AccountFile[]> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.get(`/Account/GetAccountFiles/${accountId}`, _options);
  // }
  //
  // uploadAccountFile (
  //   accountId: string, file: File,
  //   fileTemplateType: string,
  //   options: ClientOptions = { },
  // ): Observable<void> {
  //   const _options = { ...options, params: { ...options.params } };
  //
  //   const formData = new FormData();
  //   formData.set('file0', file);
  //   formData.set('fileTemplateTypes', fileTemplateType);
  //   formData.set('accountId', accountId);
  //
  //   return this.post(`/Account/fileUpload`, formData, _options);
  // }
  //
  // downloadAccountFile (accountId: string, fileTemplateType: string): Observable<Blob> {
  //   return this.get(`/Account/downloadFile/${accountId}/${fileTemplateType}`, {
  //     responseType: 'blob',
  //   });
  // }
  //
  // getContinuousTreatments(accountId: string, options: ClientOptions = {}): Observable<any[]> {
  //   const _options = { ...options, params: { ...options.params } };
  //
  //   return this.get(`/Location/GetLocationsByAccount/${accountId}`, _options).pipe(
  //     map(assets => Object.values(assets)),
  //     map((assets: any[]) => assets.reduce((acc, l) => [...acc,
  //       ...(l.ContinuousTreatments?.map(t => ({ ...t, LocationName: l.LocationName })) ?? [])], [])),
  //   );
  // }
  //
  // updateCustomBatchTag(accountId: string, tags: any, options: ClientOptions = {}): Observable<CustomTag[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.put(`/custom-tags/batch`, tags, _options);
  // }
  //
  // createCustomBatchTag(accountId: string, tag: Partial<any>, options: ClientOptions = {}): Observable<CustomTag[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.post(`/custom-tags/batch`, tag, _options);
  // }
  //
  // deleteSampleCouponReport(sampleId?: string, options: ClientOptions = {}): Observable<any[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Samples/delete-sample/${sampleId}`, _options);
  // }
  //
  // updateCoupon(order: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/samples/update-coupon`, order, _options);
  // }
  //
  // batchInstallCoupon(sample: any[], options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Samples/install-coupon/batch`, sample, _options);
  // }
  //
  // batchUpdateCoupon(sample: any[], options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Samples/update-coupon/batch`, sample, _options);
  // }
  //
  // getFieldBacteriaAnalysisData(accountId: string = 'ForUser', options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Logs/GetSampleCaptureLogs/Bacteria/${accountId}`, _options).pipe(
  //     map(data => data),
  //   );
  // }
  //
  // captureFieldBacteria(fieldBacteria: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Samples/Capture/`, { ...fieldBacteria }, _options);
  // }
  //
  // updateFieldBacteria(fieldBacteria: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Samples/UpdateSample/`, fieldBacteria, _options);
  // }
  //
  // deleteFieldBacteria(fieldBacteria: any): Observable<any> {
  //   return this.post(`/Samples/delete-sample/${fieldBacteria.Id}`, null);
  // }
  //
  // updateFieldOils(accountId: string, fieldOils: Partial<any[]>, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: { accounts: accountId ?? Array.from(new Set(fieldOils.map(a => a.AccountId))) },
  //   };
  //
  //   return this.post(`/Logs/UpdateFieldOilAnalysisLogs/`, fieldOils, _options);
  // }
  //
  // getFieldOilAnalysisData(accountId: string, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Logs/GetFieldOilAnalysisLogs/Field%20Oil%20Analysis/${accountId ?? 'ForUser'}`, _options).pipe(
  //     map(data => data),
  //   );
  // }
  //
  // updateFieldResiduals(
  //   accountId: string,
  //   fieldResiduals: any[],
  //   options: ClientOptions = {},
  // ): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: { accounts: accountId ?? Array.from(new Set(fieldResiduals.map(a => a.AccountId))) },
  //   };
  //
  //   return this.post(`/Logs/UpdateFieldResidualAnalysisLogs/`, fieldResiduals, _options);
  // }
  //
  // getResidualAnalysisData(accountId: string, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(
  //     `/Logs/GetFieldResidualAnalysisLogs/Field%20Residual%20Analysis/${accountId ?? 'ForUser'}`,
  //     _options,
  //   );
  // }
  //
  // updateGateChecks(accountId: string, gateChecks: any[], options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Logs/UpdateGateCheckLogs`, gateChecks, _options);
  // }
  //
  // getGateCheckData(accountId: string, unitSystemId: string, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       unitSystemId,
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Logs/GetGateCheckLogs/Gate%20Check%20Log/${accountId ?? 'ForUser'}`, _options);
  // }
  //
  // getPackages(accountId: string, options: ClientOptions = {}): Observable<PackageCollection> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       accountId,
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/ProductPackages`, _options).pipe(
  //     map(data => data.Items),
  //   );
  // }
  //
  // createPackage(accountId: string, data: Partial<Package>, options: ClientOptions = {}): Observable<Package> {
  //   const _data = { ...data };
  //
  //   const _options = {
  //     ...options,
  //     params: {
  //       accountId,
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/ProductPackages`, _data, _options).pipe(
  //     map(p => p.Item),
  //   );
  // }
  //
  // updatePackageById(
  //   accountId: string,
  //   packageId: string,
  //   data: Partial<Package>,
  //   options: ClientOptions = {},
  // ): Observable<Package> {
  //   const _data = {
  //     Id: packageId,
  //     ...data,
  //   };
  //
  //   const _options = {
  //     ...options,
  //     params: {
  //       accountId,
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/ProductPackages/${packageId}`, _data, _options);
  // }
  //
  // getProductionFluids(accountId: string, options: ClientOptions = { }): Observable<any[]> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.get(`/Upload/GetProdactionFluidList/${accountId}`, _options);
  // }
  //
  // updateProductionFluids(accountId: string, fluids: any[], options: ClientOptions = {}): Observable<any[]> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Upload/EditProdactionFluidList/`, fluids, _options);
  // }
  //
  // getProducts(accountId: string, options: ClientOptions = { }): Observable<Product[]> {
  //   const _options = { ...options, params: { ...options.params } };
  //
  //   return this.get(`/Products/GetAccountProducts/${accountId}`, _options);
  // }
  //
  // createProduct(accountId: string, newProduct: Partial<Product>, options: ClientOptions = { }): Observable<Product> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Products/CreateProduct`, newProduct, _options);
  // }
  //
  // updateProduct(accountId: string, productUpdate: any, options: ClientOptions = { }): Observable<boolean> {
  //   const _options = { ...options, params: { ...options.params }, headers: { accounts: accountId } };
  //
  //   return this.post(`/Products/UpdateProduct`, productUpdate, _options);
  // }
  //
  // createRoute(data: Partial<AssetsRouteEdit>, options: ClientOptions = { }): Observable<AssetsRouteRequest> {
  //   const _data = { ...data };
  //
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Route/Create`, _data, _options);
  // }
  //
  // updateRoute(data: Partial<AssetsRouteEdit>, options: ClientOptions = { }): Observable<AssetsRouteRequest> {
  //   const _data = { ...data };
  //
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.post(`/Route/Update`, _data, _options);
  // }
  //
  // createSite(accountId: string,
  //            site: any,
  //            options: ClientOptions = { }): Observable<any> {
  //   const _options = { ...options, headers: { accounts: accountId }, params: { ...options.params } };
  //
  //   return this.post('/Location/CreateSite', site, _options);
  // }
  //
  // updateSite(accountId: string, updateData: any, options: ClientOptions = { }): Observable<void> {
  //   const _options = { ...options, headers: { accounts: accountId }, params: { ...options.params } };
  //
  //   return this.post('/Location/UpdateSite', updateData, _options);
  // }
  //
  // createTank(tank: Tank, accountId: string, options: ClientOptions = { }): Observable<any> {
  //   const _options = { ...options, headers: { accounts: accountId }, params: { ...options.params } };
  //
  //   return this.post('/Tank/CreateTank', tank, _options);
  // }
  //
  // createBulkTank(tanks: Tank[], accountId: string, options: ClientOptions = { }): Observable<any> {
  //   const _options = { headers: { accounts: accountId }, params: { ...options.params }  };
  //
  //   return this.post('/Tank/CreateTank/Batch', tanks, _options).pipe(
  //     map(result => {
  //       return tanks.map(w => {
  //         const rowResult = result.find(r => r.uuid === (w as any).uuid);
  //
  //         return !rowResult || rowResult.ErrorMessage
  //           ? ({ ...w, error: rowResult?.ErrorMessage ?? 'Something went wrong' } as any)
  //           : ({
  //             ...w,
  //             ...rowResult,
  //             OrderMethod: rowResult.createOrderBySchedule ? 'Frequency' : 'Tank inventory',
  //             Id: rowResult.Id,
  //             error: '',
  //           } as any);
  //       });
  //     }),
  //   );
  // }
  //
  // updateTank(tank: Tank, accountId: string, options: ClientOptions = { }): Observable<any> {
  //   const _options = { ...options, headers: { accounts: accountId }, params: { ...options.params } };
  //
  //   return this.post('/Tank/UpdateTank', tank, _options);
  // }
  //
  // deleteTank(tank: Tank, accountId: string): Observable<any> {
  //   return this.post('/Tank/RemoveTank', tank, { headers: { accounts: accountId } });
  // }
  //
  // getAccountTanks(accountId: string, options: ClientOptions = { }): Observable<Tank[]> {
  //   const _options = { ...options, params: { ...options.params } };
  //
  //   return this.get(`/Tank/GetAccountTanks/${ accountId }`, _options);
  // }
  //
  // getTankCapacity(options: ClientOptions = { }): Observable<any[]> {
  //   const _options = { ...options, params: { ...options.params } };
  //
  //   return this.get(`/Tank/GetTankCapacity/${_options.params['UnitSystemID']}`);
  // }
  //
  // getFieldActivityLogData(body: any, options: ClientOptions = { }): Observable<any[]>{
  //   const _options = {
  //     ...options,
  //     params: { ...options.params },
  //   };
  //
  //   return this.post('/Logs/GetFieldActivityLogs', body, _options);
  // }
  //
  // getFieldActivityLogCount(body: any, options: ClientOptions = { }): Observable<any[]>{
  //   const _options = {
  //     ...options,
  //     params: { ...options.params },
  //   };
  //
  //   return this.post('/Logs/GetFieldActivityLogCountByFilter', body, _options);
  // }
  //
  // getSampleCouponReport(accountId?: string, options: ClientOptions = { }): Observable<any[]> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/logs/getsamplecapturelogs/Coupon Analysis/${accountId ? accountId : 'ForUser'}`, _options);
  // }
  //
  // getPowerBiReportUrls(accountId: string, options: ClientOptions = { }): Observable<EmbeddedReportConfig> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //       timestump: Date.now(),
  //     },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.get(`/get-pbi-report-config`, _options);
  // }
  //
  // getCustomPowerBiReportUrls(accountId: string, options: ClientOptions = { }): Observable<EmbeddedReportConfig> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //       timestump: Date.now(),
  //     },
  //     headers: { accounts: accountId },
  //   };
  //
  //   return this.get(`/get-pbi-report-config-custom`, _options);
  // }
  //
  // getUomUser(options: ClientOptions = {}): Observable<UomInterface> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.get(`/get-users-uom`, _options);
  // }
  //
  // updateUomUser(uofmId: string, options: ClientOptions = {}): Observable<UomInterface> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.post(`/update-user-uom`, { uofmId }, _options);
  // }
  //
  // createDeliveryList(accounts: string[], data: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts,
  //     },
  //   };
  //   return this.post(`/delivery/InsertProductDelivery/`, data, _options);
  // }
  //
  // addOrdersToDeliveryList(accounts: string[], data: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts,
  //     },
  //   };
  //   return this.post(`/delivery/AddToDeliveryList/`, data, _options);
  // }
  //
  // unLoadTruck(data: any, accounts: string[], options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts,
  //     },
  //   };
  //   return this.post(`/delivery/UnLoadProductDelivery/`, data, _options);
  // }
  //
  // getActiveDelivery(options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.get(`/delivery/GetDelivery`, _options);
  // }
  //
  // createSample(sample: any, options: ClientOptions = {}): Observable<UomInterface> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.post(`/Samples/Capture`, sample, _options);
  // }
  //
  // updateSample(sample: any, options: ClientOptions = {}): Observable<UomInterface> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.post(`/Samples/UpdateSample`, sample, _options);
  // }
  //
  // samplesCapture(sample: any, options: ClientOptions = { }): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Samples/Capture`, sample, _options);
  // }
  //
  // samplesInstallCoupon(sample: any, options: ClientOptions = { }): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Samples/install-coupon`, sample, _options);
  // }
  //
  // sampleExtractCoupon(sample: any, options: ClientOptions = { }): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Samples/extract-coupon`, sample, _options);
  // }
  //
  // addComment(accountId: string, orderId: string, data: any, options: ClientOptions = {}): Observable<boolean> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Order/AddNotes/${orderId}`, data, _options);
  // }
  //
  // addCommentForDelivery(
  //   accountId: string,
  //   orderId: string,
  //   data: any,
  //   options: ClientOptions = {},
  // ): Observable<boolean> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Order/AddNotesForDeliveryList/${orderId}`, data, _options);
  // }
  //
  // cancelOrder(
  //   accountId: string,
  //   orderId: string,
  //   data: any,
  //   options: ClientOptions = {},
  // ): Observable<boolean> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Order/CancelOrder/${orderId}`, data, _options);
  // }
  //
  // updateOrderVolume(
  //   accountId: string,
  //   orderId: string,
  //   payload: OrderPartialUpdate,
  //   options: ClientOptions = {},
  // ): Observable<boolean> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Order/UpdateOrderDelivery/${orderId}`, payload, _options);
  // }
  //
  // updateContinuousOrderNonRoutine(
  //   accountId: string,
  //   payload: OrderPartialUpdate,
  //   options: ClientOptions = {},
  // ): Observable<boolean> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Order/UpdateContinuousNonRoutineOrder`, payload, _options);
  // }
  //
  // updateBatchOrderNonRoutine(
  //   accountId: string,
  //   payload: OrderPartialUpdate,
  //   options: ClientOptions = {},
  // ): Observable<boolean> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Order/UpdateNonRoutineBatchOrder`, payload, _options);
  // }
  //
  // getContinuousOrdersFilters(options: ClientOptions = {}): Observable<GenericFilter> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.get(`/Filters/GetFieldTaskFiltersContinuous`, _options);
  // }
  //
  // getDeliveryFilters(options: ClientOptions = {}): Observable<GenericFilter> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.get(`/Filters/GetFieldTaskFilterForDelivery`, _options);
  // }
  //
  // getBatchOrdersFilters(options: ClientOptions = {}): Observable<GenericFilter> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.get(`/Filters/GetFieldTaskFiltersBatch`, _options);
  // }
  //
  // getStimulationFilters(options: ClientOptions = {}): Observable<GenericFilter> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.get(`/Filters/GetFieldTaskFiltersStim`, _options);
  // }
  //
  // saveCapturedInventory(accountId: string, inventory: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //   return this.post(`/Inventory/SaveCapturedInventory/`, inventory, _options);
  // }
  //
  // saveInventoryComment(comment: InjectionPointCommentPayload, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //   return this.post(`/Inventory/AddTankInventoryComment/`, comment, _options);
  // }
  //
  // getInventory(data: any, options: ClientOptions = {}): Observable<Task> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Inventory/GetInventoryByDate/`, data, _options);
  // }
  //
  // saveStimulationInventory(accountId: string, data: any, options: ClientOptions = {}): Observable<StimJobCapture> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/StimInventory/StimulationInventoryCapture`, data, _options);
  // }
  //
  // cancelStimulationCompletedOrder(accountId: string, orderId: string, options: ClientOptions = {}): Observable<boolean> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Order/StimCompletedCancelOrder/${orderId}`, { }, _options);
  // }
  //
  // cancelStimulationOrder(accountId: string, orderId: string, options: ClientOptions = {}): Observable<boolean> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Order/StimCompletedCancelOrder/${orderId}`, { }, _options);
  // }
  //
  // captureDelivery(accountId: string, payload: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/delivery/CaptureDelivery/`, payload, _options);
  // }
  //
  // captureDeliveryCAM(accountId: string, payload: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/delivery/CaptureDeliveryCAM/`, payload, _options);
  // }
  //
  // captureDeliveryComplete(accountId: string, payload: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/delivery/CaptureCompletedDelivery/`, payload, _options);
  // }
  //
  // approveStimulationOrder(
  //   accountId: string,
  //   payload: { id: string, volume: number },
  //   options: ClientOptions = {},
  // ): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Order/ApproveStimOrders/`, payload, _options);
  // }
  //
  // getAssetFilters(accountId: string, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //   return this.get(`/Filters/GetFilterForAssetManagement/${accountId}`, _options)
  //     .pipe(
  //       map(filters => {
  //         if (!filters.Asset) {
  //           filters.Asset = {
  //             AssetNames: [],
  //             Field: [],
  //             Site: [],
  //             Route: [],
  //             WellType: [],
  //             NonWellType: [],
  //             CustomTags: [],
  //             CustomerNames: [],
  //           };
  //         }
  //
  //         if (!filters.FieldTask) {
  //           filters.FieldTask = {
  //             InjectionPoint: [],
  //             Tank: [],
  //             Frequencies: [],
  //           };
  //         }
  //
  //         if (!filters.Product) {
  //           filters.Product = {
  //             ProductType: [],
  //             ProductName: [],
  //           };
  //         }
  //
  //         if (!filters.Status) {
  //           filters.Status = {
  //             DeliveryStatus: [],
  //           };
  //         }
  //         return filters;
  //       }),
  //     );
  // }
  //
  // getTaskListFilter(options: ClientOptions = {}): Observable<GenericFilter> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.get(`/Filters/GetFieldTaskFiltersTasks`, _options);
  // }
  //
  // getBatchOrderOffCycleValidationInfo(
  //   locationId: string,
  //   accountProductId: string,
  //   injectionPoint: string,
  //   options: ClientOptions = { },
  // ): Observable<OffCycleBatchOrderValidationInfo> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   const _data = {
  //     locationId,
  //     accountProductId,
  //     injectionPoint,
  //   };
  //
  //   return this.post(`/Order/CheckCreatingBatchNonRoutineOrder`, _data, _options);
  // }
  //
  // createOffCycleBatchOrders(order: Partial<OffCycleBatchOrder>,
  //                           options: ClientOptions = { }): Observable<OffCycleBatchOrder> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Order/CreateBatchNonRoutineOrder`, order, _options);
  // }
  //
  // getContinuousOrderOffCycleValidationInfo(
  //   locationId: string,
  //   tankId: string,
  //   injectionPoint: string,
  //   options: ClientOptions = { },
  // ): Observable<OffCycleContinuousOrderValidationInfo> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   const _data = {
  //     locationId,
  //     tankId,
  //     injectionPoint,
  //   };
  //
  //   return this.post(`/Order/CheckCreatingContinuousNonRoutineOrder`, _data, _options);
  // }
  //
  // createOffCycleContinuousOrders(order: Partial<OffCycleContinuousOrder>,
  //                                options: ClientOptions = { }): Observable<OffCycleContinuousOrder> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //   };
  //
  //   return this.post(`/Order/CreateContinuousNonRoutineOrder`, order, _options);
  // }
  //
  // exportContinuousTo(params, accountIds: string[], options: ClientOptions = { }): Observable<any> {
  //   const _options = {
  //     ...options, params: { ...options.params },
  //     observe: 'response',
  //     responseType: 'blob',
  //     headers: {
  //       accounts: accountIds,
  //     },
  //   };
  //
  //   return this.post(`/logs/GetContinuousConfirmationFileToSave`, params, _options);
  // }
  //
  // exportTo(params, accountIds: string[], options: ClientOptions = { }): Observable<any> {
  //   const _options = {
  //     ...options, params: { ...options.params },
  //     observe: 'response',
  //     responseType: 'blob',
  //     headers: {
  //       accounts: accountIds,
  //     },
  //   };
  //
  //   return this.post(`/logs/GetConfirmationFileToSave`, params, _options);
  // }
  //
  // createContact(accountId: string, params: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options, params: { accountId },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Contact/AddContactRegistration`, params, _options);
  // }
  //
  // updateContact(accountId: string, params: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options, params: { accountId },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Contact/UpdateContactRegistration`, params, _options);
  // }
  //
  // deleteContact(accountId: string, email: string, reason: string, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Contact/RemoveContact`, { accountId, email, reason }, _options);
  // }
  //
  // deleteAccessContact(accountId: string, email: string, reason: string, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Contact/RemoveExternalUserAccess`, { accountId, email, reason }, _options);
  // }
  //
  // grantAccessContact(accountId: string, email: string, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options,
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/Contact/GrantAccess`, { accountId, email }, _options);
  // }
  //
  // updateCrew(accountId: string, crew: any, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options, params: { accountId },
  //     observe: 'response',
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.get(`/Account/LinkCrew/${crew}/${accountId}`, _options);
  // }
  //
  // getContactFilters(accountId: string, options: ClientOptions = {}): Observable<ContactFilter> {
  //   const _options = {
  //     ...options,
  //     params: {
  //       ...options.params,
  //     },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.get(`/Filters/GetContactsFilter/${accountId}`, _options);
  // }
  //
  // getAccountSamples(accountId: string): Observable<Sample[]> {
  //   return this.get(`/location/GetLocationSamples/${ accountId }`);
  // }
  //
  // createAnalysisSample(sample: any,
  //                      locationId: string,
  //                      accountId: string,
  //                      options: ClientOptions = {}): Observable<Sample> {
  //   const _options = {
  //     ...options,
  //     params: { locationId },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/location/Analysis/Single`, sample, _options);
  // }
  //
  // updateAnalysisSample(sample: any,
  //                      locationId: string,
  //                      accountId: string,
  //                      options: ClientOptions = {}): Observable<Sample> {
  //   const _options = {
  //     ...options,
  //     params: { locationId },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/location/UpdateAnalysis/Single`, sample, _options);
  // }
  //
  // deleteAnalysisSample(sample: any,
  //                      locationId: string,
  //                      accountId: string,
  //                      options: ClientOptions = {}): Observable<Sample> {
  //   const _options = {
  //     ...options,
  //     params: { locationId },
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/location/DeleteAnalysis/Single`, sample, _options);
  // }
  //
  // // TODO Suspend we are waiting for bek
  // suspendAnalysisSample(sample: any, locationId: string, options: ClientOptions = {}): Observable<any> {
  //   const _options = {
  //     ...options, params: { locationId },
  //   };
  //
  //   return this.post(`/location/SuspendAnalysis/Single`, sample, _options);
  // }
  //
  // updateManySamples(samples: Sample[], accountId: string, options: ClientOptions = {}): Observable<Sample[]> {
  //   const _options = {
  //     ...options,
  //     headers: {
  //       accounts: accountId,
  //     },
  //   };
  //
  //   return this.post(`/location/sample-batch`, samples, _options);
  // }
}
