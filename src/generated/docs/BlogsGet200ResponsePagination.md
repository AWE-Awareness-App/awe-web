# BlogsGet200ResponsePagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalItems** | **number** | Total number of items across all pages | [optional] [default to undefined]
**totalPages** | **number** | Total number of pages available | [optional] [default to undefined]
**currentPage** | **number** | The current page number (1-based index) | [optional] [default to undefined]
**itemsPerPage** | **number** | Number of items per page | [optional] [default to undefined]
**nextPage** | **string** | The next page url, or null if this is the last page | [optional] [default to undefined]
**previousPage** | **string** | The previous page url, or null if this is the first page | [optional] [default to undefined]

## Example

```typescript
import { BlogsGet200ResponsePagination } from './api';

const instance: BlogsGet200ResponsePagination = {
    totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
    nextPage,
    previousPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
