# PaymentsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiPaymentsCheckoutSessionPost**](#apipaymentscheckoutsessionpost) | **POST** /api/payments/checkout-session | Create a new Stripe Checkout session for workshop booking|
|[**apiPaymentsWebhookPost**](#apipaymentswebhookpost) | **POST** /api/payments/webhook | Handle Stripe webhook events|

# **apiPaymentsCheckoutSessionPost**
> CheckoutSessionResponse apiPaymentsCheckoutSessionPost(checkoutSessionRequest)


### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    CheckoutSessionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let checkoutSessionRequest: CheckoutSessionRequest; //

const { status, data } = await apiInstance.apiPaymentsCheckoutSessionPost(
    checkoutSessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkoutSessionRequest** | **CheckoutSessionRequest**|  | |


### Return type

**CheckoutSessionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Checkout session created successfully |  -  |
|**400** | Invalid request parameters |  -  |
|**401** | Unauthorized - valid JWT token required |  -  |
|**404** | Workshop not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPaymentsWebhookPost**
> WebhookResponse apiPaymentsWebhookPost(body)


### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let body: object; //

const { status, data } = await apiInstance.apiPaymentsWebhookPost(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**WebhookResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook received successfully |  -  |
|**400** | Invalid webhook signature or payload |  -  |
|**500** | Error processing webhook |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

