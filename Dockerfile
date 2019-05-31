FROM mcr.microsoft.com/dotnet/core/sdk:2.2-bionic AS build-env
WORKDIR /app

# Install NodeJS for Angular
RUN apt-get update -y
RUN curl -sL https://deb.nodesource.com/setup_11.x | sh -
RUN apt-get install -y nodejs

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

#ENV ASPNETCORE_Environment=Development

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
RUN apt-get update -y
RUN curl -sL https://deb.nodesource.com/setup_11.x | sh -
RUN apt-get install -y nodejs
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "CloudAPIsSemesterProject.dll"]