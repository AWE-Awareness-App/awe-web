# DefaultApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**healthGet**](#healthget) | **GET** /health | Health check endpoint|
|[**workshopBookingsGet**](#workshopbookingsget) | **GET** /workshopBookings | Get all workshop bookings|

# **healthGet**
> HealthGet200Response healthGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.healthGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**HealthGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Service is healthy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workshopBookingsGet**
> Array<WorkshopBooking> workshopBookingsGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.workshopBookingsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<WorkshopBooking>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

