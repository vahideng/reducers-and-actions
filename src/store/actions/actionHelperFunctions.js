






// export const fetchHelper ( link, loadingCB, loadFailedCB, loadedCB, dataType = 'default' )=>
// {
// 	return ( dispatch ) => 
// 	{
// 		if ( loadingCB != null )
// 			dispatch ( loadingCB ( true ) );
// 		return fetch ( link )
// 		.then ( ( response ) =>
// 		{
// 			if ( !response.ok )
// 				throw Error ( response.statusText );

// 			if ( loadingCB != null )
// 				dispatch ( loadingCB ( false ) );
// 			return response;
// 		} )
// 		.then ( ( response ) => response.json () )
// 		.then ( ( data ) => 
// 		{
// 			if ( data.status === 'success' )
// 			{
// 				switch ( dataType )
// 				{
// 				case 'firstItem':
// 					dispatch ( loadedCB ( data.data[0] ) );
// 					break;

// 				default:
// 					dispatch ( loadedCB ( data.data ) );
// 					break;
// 				}
// 			}
// 			else
// 			{
// 				if ( loadFailedCB != null )
// 					dispatch ( loadFailedCB ( data.message ) );
// 			}
// 		} );
// 	}
// }