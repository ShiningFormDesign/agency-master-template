# new-client.ps1
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   AGENCY STUDIO: NEW CLIENT GENERATOR    " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# 1. Get the Target
$ProjectId = Read-Host "Enter the NEW Client Project ID (from Sanity Manage)"
$Dataset   = "production"

# 2. Choose the DNA
Write-Host "`nChoose a Blueprint:" -ForegroundColor Yellow
Write-Host "1. Brochure (Consultant/Lawyer)"
Write-Host "2. Visualist (Portfolio/Artist)"
Write-Host "3. Publisher (Blog/News)"
Write-Host "4. Merchant (Product/Store)"
Write-Host "5. Service (Plumber/HVAC)"

$Choice = Read-Host "`nEnter Number (1-5)"

# Map the choice to the file
switch ($Choice) {
    "1" { $SeedFile = "seeds/brochure.tar.gz" }
    "2" { $SeedFile = "seeds/visualist.tar.gz" }
    "3" { $SeedFile = "seeds/publisher.tar.gz" }
    "4" { $SeedFile = "seeds/merchant.tar.gz" }
    "5" { $SeedFile = "seeds/service.tar.gz" }
    Default { Write-Error "Invalid selection."; exit }
}

# 3. The Injection
Write-Host "`nInjecting $SeedFile into Project: $ProjectId..." -ForegroundColor Green

$OriginalLocation = Get-Location
Set-Location "studio"

try {
    npx sanity dataset import "../$SeedFile" $Dataset --projectId $ProjectId --replace
}
catch {
    Write-Error "Import failed. Check the error message above."
}

Set-Location $OriginalLocation

# 4. Automate the Local Environment
Write-Host "`nGenerating local .env file..." -ForegroundColor Green
$envContent = @"
PUBLIC_SANITY_PROJECT_ID="$ProjectId"
PUBLIC_SANITY_DATASET="$Dataset"
"@
Set-Content -Path ".env" -Value $envContent

Write-Host "`n------------------------------------------"
Write-Host "SUCCESS! Client Project is Ready." -ForegroundColor Cyan
Write-Host "Next Step: Run 'npm run dev' to start the server."
Write-Host "------------------------------------------"