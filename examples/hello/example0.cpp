#include "sleepy_discord/sleepy_discord.h"

class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;
	void onMessage(SleepyDiscord::Message message) override {
		if (message.startsWith("whcg hello"))
			sendMessage(message.channelID, "Hello " + message.author.username);
	}
};

int main() {
	MyClientClass client("NTc0NDc0MTIwNDY1NzQzODk2.GvQyY2.31a-kpfWBVkTLG11Olq1-lR0uKyLNldvh2X0T8", SleepyDiscord::USER_CONTROLED_THREADS);
	client.setIntents(SleepyDiscord::Intent::SERVER_MESSAGES);
	client.run();
}
