using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
namespace main.Hubs
{
    public class GameHub : Hub
    {
    
        public async Task BroadcastChartData(List<DocumentModel> data) => await Clients.All.SendAsync("broadcastchartdata", data);

        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
