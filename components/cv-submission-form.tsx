'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Plus, X, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormItem {
  [key: string]: string
}

interface FormData {
  targetIndustry: string
  linkedinUrl: string
  portfolioLink: string
  specialNotes: string
  willingnessToRelocate: string
  hasDriversLicense: string
  jobUrl: string
  cvLength: string
  name: string
  email: string
  phone: string
  address: string
  country: string
  city: string
  interests: string
  education: FormItem[]
  workHistory: FormItem[]
  skills: FormItem[]
  certifications: FormItem[]
  projects: FormItem[]
  publications: FormItem[]
  awards: FormItem[]
  memberships: FormItem[]
  references: FormItem[]
}

interface AddedItem {
  id: string
  data: FormItem
}

export function CVSubmissionForm() {
  const [activeTab, setActiveTab] = useState<'fill' | 'upload'>('fill')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [addedItems, setAddedItems] = useState<{ [key: string]: AddedItem[] }>({
    education: [],
    workHistory: [],
    skills: [],
    certifications: [],
    projects: [],
    publications: [],
    awards: [],
    memberships: [],
    references: [],
  })

  const [formData, setFormData] = useState<FormData>({
    targetIndustry: '',
    linkedinUrl: '',
    portfolioLink: '',
    specialNotes: '',
    willingnessToRelocate: '',
    hasDriversLicense: '',
    jobUrl: '',
    cvLength: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    interests: '',
    education: [],
    workHistory: [],
    skills: [],
    certifications: [],
    projects: [],
    publications: [],
    awards: [],
    memberships: [],
    references: [],
  })

  const [currentFormItem, setCurrentFormItem] = useState<FormItem>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAddItem = (section: string, fields: string[]) => {
    if (fields.some((f) => !currentFormItem[f])) {
      alert(`Please fill all fields for ${section}`)
      return
    }

    const newItem = { id: Date.now().toString(), data: { ...currentFormItem } }
    setAddedItems((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), newItem],
    }))
    setCurrentFormItem({})
  }

  const handleRemoveItem = (section: string, id: string) => {
    setAddedItems((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }))
  }

  const handleSubmit = async () => {
    // Only check for Terms agreement – all data fields are now optional
    if (!agreedToTerms) {
      alert('Please agree to the Terms and Conditions')
      return
    }

    setIsSubmitting(true)

    const buildMessage = () => {
      let msg = `*NEW CV SUBMISSION - ${activeTab === 'fill' ? 'FORM FILLED' : 'EXISTING CV'}*\n\n`

      msg += `*CORE INFORMATION*\n`
      msg += `Name: ${formData.name || 'Not provided'}\n`
      msg += `Email: ${formData.email || 'Not provided'}\n`
      msg += `Phone: ${formData.phone || 'Not provided'}\n`
      msg += `Address: ${formData.address ? `${formData.address}, ${formData.city}, ${formData.country}` : 'Not provided'}\n\n`

      msg += `*REQUIRED INFORMATION*\n`
      msg += `Target Industry: ${formData.targetIndustry || 'Not provided'}\n`
      msg += `LinkedIn: ${formData.linkedinUrl || 'Not provided'}\n`
      msg += `Portfolio: ${formData.portfolioLink || 'Not provided'}\n`
      msg += `Job URL: ${formData.jobUrl || 'Not provided'}\n`
      msg += `CV Length: ${formData.cvLength || 'Not provided'}\n`
      msg += `Willing to Relocate: ${formData.willingnessToRelocate || 'Not provided'}\n`
      msg += `Driver's License: ${formData.hasDriversLicense || 'Not provided'}\n\n`

      msg += `*SPECIAL NOTES*\n${formData.specialNotes || 'None'}\n\n`

      if (formData.interests) {
        msg += `*INTERESTS*\n${formData.interests}\n\n`
      }

      addedItems.education.forEach((item) => {
        if (msg.indexOf('*EDUCATION*') === -1) msg += `*EDUCATION*\n`
        msg += `- ${item.data.degree || ''} from ${item.data.institution || ''} (${item.data.year || ''})\n`
      })
      if (addedItems.education.length > 0) msg += '\n'

      addedItems.workHistory.forEach((item) => {
        if (msg.indexOf('*WORK EXPERIENCE*') === -1) msg += `*WORK EXPERIENCE*\n`
        msg += `- ${item.data.position || ''} at ${item.data.company || ''} (${item.data.period || ''})\n  Achievements: ${item.data.achievements || ''}\n`
      })
      if (addedItems.workHistory.length > 0) msg += '\n'

      addedItems.skills.forEach((item) => {
        if (msg.indexOf('*SKILLS*') === -1) msg += `*SKILLS*\n`
        msg += `- ${item.data.name || ''} (${item.data.level || ''})\n`
      })
      if (addedItems.skills.length > 0) msg += '\n'

      addedItems.certifications.forEach((item) => {
        if (msg.indexOf('*CERTIFICATIONS*') === -1) msg += `*CERTIFICATIONS*\n`
        msg += `- ${item.data.name || ''} from ${item.data.issuer || ''} (${item.data.year || ''})\n`
      })
      if (addedItems.certifications.length > 0) msg += '\n'

      addedItems.projects.forEach((item) => {
        if (msg.indexOf('*PROJECTS*') === -1) msg += `*PROJECTS*\n`
        msg += `- ${item.data.name || ''}: ${item.data.description || ''}\n`
      })
      if (addedItems.projects.length > 0) msg += '\n'

      addedItems.publications.forEach((item) => {
        if (msg.indexOf('*PUBLICATIONS*') === -1) msg += `*PUBLICATIONS*\n`
        msg += `- ${item.data.title || ''}: ${item.data.details || ''}\n`
      })
      if (addedItems.publications.length > 0) msg += '\n'

      addedItems.awards.forEach((item) => {
        if (msg.indexOf('*AWARDS*') === -1) msg += `*AWARDS*\n`
        msg += `- ${item.data.title || ''} (${item.data.year || ''})\n`
      })
      if (addedItems.awards.length > 0) msg += '\n'

      addedItems.memberships.forEach((item) => {
        if (msg.indexOf('*PROFESSIONAL MEMBERSHIPS*') === -1) msg += `*PROFESSIONAL MEMBERSHIPS*\n`
        msg += `- ${item.data.name || ''} (${item.data.year || ''})\n`
      })
      if (addedItems.memberships.length > 0) msg += '\n'

      addedItems.references.forEach((item) => {
        if (msg.indexOf('*REFERENCES*') === -1) msg += `*REFERENCES*\n`
        msg += `- ${item.data.name || ''} (${item.data.title || ''}): ${item.data.contact || ''}\n`
      })

      return msg
    }

    const message = buildMessage()
    const whatsappLink = `https://wa.me/233543662424?text=${encodeURIComponent(message)}`

    setTimeout(() => {
      window.open(whatsappLink, '_blank')
      setSubmitted(true)
      setIsSubmitting(false)
    }, 500)
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background px-4">
        <Card className="w-full max-w-md border-accent/50">
          <CardContent className="pt-8 pb-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Submission Sent to Ernest Nii Quao!</h2>
            <p className="text-muted-foreground mb-6">Your CV information has been sent to Ernest Nii Quao via WhatsApp. We'll review your details and get back to you shortly to discuss your career goals.</p>
            <Button onClick={() => window.location.reload()} className="w-full">
              Submit Another
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full bg-background min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Requirements Alert */}
        <Card className="mb-6 border-accent/50 bg-muted">
          <CardContent className="pt-6 pb-6">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Information for Ernest Nii Quao</h3>
                <p className="text-sm text-muted-foreground mb-3">Share as much detail as possible so Ernest Nii Quao can craft the perfect CV for your target role.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <li>• Target Industry/Role</li>
                  <li>• LinkedIn Profile URL</li>
                  <li>• Portfolio/Projects Link</li>
                  <li>• Target Job URL</li>
                  <li>• Special Instructions</li>
                  <li>• CV Length Preference</li>
                  <li>• Relocation Willingness</li>
                  <li>• Driver's License Status</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'fill' | 'upload')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="fill" className="text-xs sm:text-sm">Fill Form</TabsTrigger>
            <TabsTrigger value="upload" className="text-xs sm:text-sm">Submit Existing</TabsTrigger>
          </TabsList>

          {/* Fill Form Tab */}
          <TabsContent value="fill" className="space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">1. Personal Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm">Name *</Label>
                    <Input value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="mt-1" placeholder="Full name" />
                  </div>
                  <div>
                    <Label className="text-sm">Email *</Label>
                    <Input value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="mt-1" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label className="text-sm">Phone *</Label>
                    <Input value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="mt-1" placeholder="+233..." />
                  </div>
                  <div>
                    <Label className="text-sm">City</Label>
                    <Input value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} className="mt-1" placeholder="City" />
                  </div>
                  <div>
                    <Label className="text-sm">Country</Label>
                    <Input value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)} className="mt-1" placeholder="Country" />
                  </div>
                  <div>
                    <Label className="text-sm">Address</Label>
                    <Input value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} className="mt-1" placeholder="Address" />
                  </div>
                </div>
                <div>
                  <Label className="text-sm">Interests & Hobbies</Label>
                  <Textarea value={formData.interests} onChange={(e) => handleInputChange('interests', e.target.value)} className="mt-1" placeholder="What are your interests?" rows={3} />
                </div>
              </CardContent>
            </Card>

            {/* Required Fields */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">2. Required Info *</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm">Target Industry/Role *</Label>
                  <Input value={formData.targetIndustry} onChange={(e) => handleInputChange('targetIndustry', e.target.value)} className="mt-1" placeholder="e.g., Software Engineering" />
                </div>
                <div>
                  <Label className="text-sm">LinkedIn Profile URL *</Label>
                  <Input value={formData.linkedinUrl} onChange={(e) => handleInputChange('linkedinUrl', e.target.value)} className="mt-1" placeholder="https://linkedin.com/in/..." />
                </div>
                <div>
                  <Label className="text-sm">Portfolio/Projects Link *</Label>
                  <Input value={formData.portfolioLink} onChange={(e) => handleInputChange('portfolioLink', e.target.value)} className="mt-1" placeholder="https://portfolio.com" />
                </div>
                <div>
                  <Label className="text-sm">Target Job URL *</Label>
                  <Input value={formData.jobUrl} onChange={(e) => handleInputChange('jobUrl', e.target.value)} className="mt-1" placeholder="https://job-posting.com" />
                </div>

                <div>
                  <Label className="text-sm">CV Length Preference *</Label>
                  <RadioGroup 
                    value={formData.cvLength} 
                    onValueChange={(v) => handleInputChange('cvLength', v)}
                  >
                    <div className="flex items-center space-x-2 mt-1">
                      <RadioGroupItem value="1-2-pages" id="1-2" />
                      <Label htmlFor="1-2" className="font-normal cursor-pointer">
                        1–2 Pages
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3-4-pages" id="3-4" />
                      <Label htmlFor="3-4" className="font-normal cursor-pointer">
                        3–4 Pages
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5-plus-pages" id="5plus" />
                      <Label htmlFor="5plus" className="font-normal cursor-pointer">
                        5+ Pages
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm">Willing to Relocate? *</Label>
                    <RadioGroup value={formData.willingnessToRelocate} onValueChange={(v) => handleInputChange('willingnessToRelocate', v)}>
                      <div className="flex items-center space-x-2 mt-1">
                        <RadioGroupItem value="yes" id="relocate-yes" />
                        <Label htmlFor="relocate-yes" className="font-normal cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="relocate-no" />
                        <Label htmlFor="relocate-no" className="font-normal cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label className="text-sm">Driver's License? *</Label>
                    <RadioGroup value={formData.hasDriversLicense} onValueChange={(v) => handleInputChange('hasDriversLicense', v)}>
                      <div className="flex items-center space-x-2 mt-1">
                        <RadioGroupItem value="yes" id="license-yes" />
                        <Label htmlFor="license-yes" className="font-normal cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="license-no" />
                        <Label htmlFor="license-no" className="font-normal cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label className="text-sm">Special Instructions for Writers *</Label>
                  <Textarea value={formData.specialNotes} onChange={(e) => handleInputChange('specialNotes', e.target.value)} className="mt-1" placeholder="Any special instructions or notes?" rows={3} />
                </div>
              </CardContent>
            </Card>

            {/* Optional Sections */}
            {[
              { title: '3. Education', key: 'education', fields: ['degree', 'institution', 'year'], labels: ['Degree', 'Institution', 'Year'] },
              { title: '4. Work Experience', key: 'workHistory', fields: ['position', 'company', 'period', 'achievements'], labels: ['Position', 'Company', 'Period', 'Achievements'] },
              { title: '5. Skills', key: 'skills', fields: ['name', 'level'], labels: ['Skill', 'Level (e.g., Intermediate)'] },
              { title: '6. Certifications', key: 'certifications', fields: ['name', 'issuer', 'year'], labels: ['Certification', 'Issuer', 'Year'] },
              { title: '7. Projects', key: 'projects', fields: ['name', 'description'], labels: ['Project Name', 'Description'] },
              { title: '8. Publications', key: 'publications', fields: ['title', 'details'], labels: ['Title', 'Details'] },
              { title: '9. Awards', key: 'awards', fields: ['title', 'year'], labels: ['Award', 'Year'] },
              { title: '10. Memberships', key: 'memberships', fields: ['name', 'year'], labels: ['Membership', 'Year'] },
              { title: '11. References', key: 'references', fields: ['name', 'title', 'contact'], labels: ['Name', 'Title', 'Contact'] },
            ].map((section) => (
              <Card key={section.key}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {addedItems[section.key as keyof typeof addedItems].length > 0 && (
                    <div className="space-y-3">
                      {addedItems[section.key as keyof typeof addedItems].map((item) => (
                        <div key={item.id} className="bg-card/50 border border-border rounded-lg p-3 flex justify-between items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-foreground truncate">
                              {item.data[section.fields[0]]}
                            </p>
                            {section.fields.length > 1 && (
                              <p className="text-xs text-muted-foreground">
                                {section.fields.slice(1).map((f) => item.data[f]).join(' • ')}
                              </p>
                            )}
                          </div>
                          <Button size="sm" variant="ghost" onClick={() => handleRemoveItem(section.key, item.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-3 bg-muted/30 p-3 rounded-lg">
                    {section.fields.map((field, idx) => (
                      <div key={field}>
                        <Label className="text-xs">{section.labels[idx]}</Label>
                        <Input
                          value={currentFormItem[field] || ''}
                          onChange={(e) => setCurrentFormItem({ ...currentFormItem, [field]: e.target.value })}
                          className="mt-1 text-sm"
                          placeholder={section.labels[idx]}
                        />
                      </div>
                    ))}
                    <Button
                      size="sm"
                      onClick={() => handleAddItem(section.key, section.fields)}
                      className="w-full mt-2 gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add {section.title.split('.')[1]}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Submit Existing CV</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm">Name *</Label>
                  <Input value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="mt-1" placeholder="Full name" />
                </div>
                <div>
                  <Label className="text-sm">Email *</Label>
                  <Input value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="mt-1" type="email" />
                </div>
                <div>
                  <Label className="text-sm">Phone *</Label>
                  <Input value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="mt-1" placeholder="+233..." />
                </div>
                <div>
                  <Label className="text-sm">Target Industry *</Label>
                  <Input value={formData.targetIndustry} onChange={(e) => handleInputChange('targetIndustry', e.target.value)} className="mt-1" placeholder="e.g., Software Engineering" />
                </div>
                <div>
                  <Label className="text-sm">LinkedIn Profile *</Label>
                  <Input value={formData.linkedinUrl} onChange={(e) => handleInputChange('linkedinUrl', e.target.value)} className="mt-1" placeholder="https://linkedin.com/in/..." />
                </div>
                <div>
                  <Label className="text-sm">Portfolio Link *</Label>
                  <Input value={formData.portfolioLink} onChange={(e) => handleInputChange('portfolioLink', e.target.value)} className="mt-1" placeholder="https://portfolio.com" />
                </div>
                <div>
                  <Label className="text-sm">Target Job URL *</Label>
                  <Input value={formData.jobUrl} onChange={(e) => handleInputChange('jobUrl', e.target.value)} className="mt-1" placeholder="https://job-posting.com" />
                </div>
                <div>
                  <Label className="text-sm">Special Notes *</Label>
                  <Textarea value={formData.specialNotes} onChange={(e) => handleInputChange('specialNotes', e.target.value)} className="mt-1" placeholder="Upload your CV to WhatsApp and describe any specific changes needed" rows={4} />
                </div>

                {/* Added CV Length Preference */}
                <div>
                  <Label className="text-sm">CV Length Preference *</Label>
                  <RadioGroup 
                    value={formData.cvLength} 
                    onValueChange={(v) => handleInputChange('cvLength', v)}
                  >
                    <div className="flex items-center space-x-2 mt-1">
                      <RadioGroupItem value="1-2-pages" id="up-1-2" />
                      <Label htmlFor="up-1-2" className="font-normal cursor-pointer">
                        1–2 Pages
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3-4-pages" id="up-3-4" />
                      <Label htmlFor="up-3-4" className="font-normal cursor-pointer">
                        3–4 Pages
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5-plus-pages" id="up-5plus" />
                      <Label htmlFor="up-5plus" className="font-normal cursor-pointer">
                        5+ Pages
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm">Willing to Relocate? *</Label>
                  <RadioGroup value={formData.willingnessToRelocate} onValueChange={(v) => handleInputChange('willingnessToRelocate', v)}>
                    <div className="flex items-center space-x-2 mt-1">
                      <RadioGroupItem value="yes" id="up-relocate-yes" />
                      <Label htmlFor="up-relocate-yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="up-relocate-no" />
                      <Label htmlFor="up-relocate-no" className="font-normal cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label className="text-sm">Driver's License? *</Label>
                  <RadioGroup value={formData.hasDriversLicense} onValueChange={(v) => handleInputChange('hasDriversLicense', v)}>
                    <div className="flex items-center space-x-2 mt-1">
                      <RadioGroupItem value="yes" id="up-license-yes" />
                      <Label htmlFor="up-license-yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="up-license-no" />
                      <Label htmlFor="up-license-no" className="font-normal cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Terms & Submit */}
        <Card className="mt-6">
          <CardContent className="pt-6 pb-6">
            <div className="flex items-start gap-3 mb-6">
              <Checkbox checked={agreedToTerms} onCheckedChange={setAgreedToTerms} id="terms" className="mt-1" />
              <Label htmlFor="terms" className="font-normal cursor-pointer text-sm">
                I agree to the Terms and Conditions and understand my CV will be processed and sent via WhatsApp.
              </Label>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !agreedToTerms}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
            >
              {isSubmitting ? 'Processing...' : 'Send to WhatsApp'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
